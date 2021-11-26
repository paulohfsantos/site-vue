<template>
  <div id="app">
    <Snackbar
      :show="snackbar.show"
      :message="snackbar.msg"
      :color="snackbar.color"
      @closeSnackbar="snackbar.show = false"
    />
    <Alert
      :visible="alert.visible"
      :text="alert.text"
      :status="alert.status"
      @closeAlert="alert.show = false"
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
import Alert from "@/components/Alert/Alert";
import Snackbar from "@/components/Snackbar/Snackbar";

export default {
  name: "App",
  components: {
    Navbar,
    Snackbar,
    Alert,
  },

  computed: {
    ...mapGetters(["snackbar", "alert"]),
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
