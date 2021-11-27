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
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar/Navbar";
import Alert from "@/components/Alert/Alert";
import Snackbar from "@/components/Snackbar/Snackbar";
import Footer from "@/components/Footer/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Snackbar,
    Alert,
    Footer,
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
}
main {
  min-height: 100vh;
}
</style>
