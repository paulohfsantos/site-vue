<template>
  <div class="about">
    <main>
      <h2>about page</h2>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "About",

  mounted() {
    Promise.all([
      this.$store.commit("resetAbout"),
      this.$store.dispatch("getAbout"),
    ])
      .then(() => {
        this.$store.commit("changeSnackbar", {
          show: true,
          msg: "Page loaded",
          color: "success",
        });
      })
      .catch(() => {
        this.$store.commit("changeSnackbar", {
          show: true,
          msg: "Error loading about page",
          color: "error",
        });
      });

    // dismiss snackbar after timeout
    setTimeout(() => {
      this.$store.commit("changeSnackbar", {
        show: false,
      });
    }, 1000);
  },

  computed: {
    ...mapGetters(["about"]),
  },
};
</script>
