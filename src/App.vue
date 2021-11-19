<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
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
