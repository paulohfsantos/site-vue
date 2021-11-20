<template>
  <div id="app">
    <Snackbar
      :msg="`this is a snackbar msg`"
      :color="color"
      @closeSnackbar="closeSnackbar"
    />
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import Snackbar from "@/components/Snackbar/Snackbar";

export default {
  name: "App",
  components: {
    Navbar,
    Snackbar,
  },
  data: () => ({
    color: "info",
    // timeout: 3000,
  }),

  methods: {
    closeSnackbar() {
      this.$store.commit("closeSnackbar");
      console.log("close snackkkk");
    },
  },
};
</script>

<style lang="scss">
@import "@/sass/global.scss";
@import "@/sass/globalColors.scss";

#app {
  background-color: #eee;
  min-height: 100vh;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0.5rem;
  }
}
</style>
