<template>
  <div id="app">
    <Snackbar
      :show="snackbar.show"
      :message="snackbar.msg"
      :color="snackbar.color"
      @closeSnackbar="snackbar.show = false"
    />
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar/Navbar";
import Snackbar from "@/components/Snackbar/Snackbar";

export default {
  name: "App",
  components: {
    Navbar,
    Snackbar,
  },

  computed: {
    ...mapGetters(["snackbar"]),
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
