<template>
  <i :class="`icon-` + name + ` ${variant == 'dark' ? 'dark' : 'light'}`"></i>
</template>

<script>
export default {
  name: "icon",

  props: {
    name: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/icons.scss";
</style>
