<template>
  <div class="about">
    <main>
      <h2>About me...</h2>

      <div class="col-lg-12 col-md-12">
        <div class="row mt-4 items-center">
          <div class="col-md-6 col-lg-6">
            <div class="profile-pic">
              <img :src="about.image" alt="profile-pic" />
            </div>
          </div>

          <div class="col-md-6 col-lg-6">
            <div class="about-me">
              <h3>{{ about.name }}</h3>
              <p>{{ about.desc }}</p>
            </div>
          </div>
        </div>
      </div>
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

<style lang="scss" scoped>
@import "./style.scss";
@import "../../sass/global.scss";
</style>
