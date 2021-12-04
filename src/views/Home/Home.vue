<template>
  <section class="home">
    <div>
      <h2>main site content</h2>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",

  computed: {
    ...mapGetters(["dialog"]),
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
