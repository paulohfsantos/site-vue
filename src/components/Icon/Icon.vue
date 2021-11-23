<template>
  <section class="icons">
    <div class="icons-container">
      <i :class="`icon-` + name"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: "icon",

  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/icons.scss";
</style>
