<template>
  <div class="home">
    <main>
      <h2>main site content</h2>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  mounted() {
    console.log("mounted", this.snackbar);
  },
  computed: {
    ...mapGetters(["snackbar"]),
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
