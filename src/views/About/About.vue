<template>
  <div class="about">
    <main>
      <h2>About me...</h2>

      <p>
        {{ about.desc }}
      </p>
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
    // commit all properties in order to not get a undefined error
    setTimeout(() => {
      this.$store.commit("changeSnackbar", {
        show: false,
        msg: "",
        color: "",
      });
    }, 1000);
  },

  computed: {
    ...mapGetters(["about"]),
  },
};
</script>
