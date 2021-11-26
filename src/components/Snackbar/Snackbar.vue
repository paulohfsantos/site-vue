<template>
  <div v-if="show" :class="'snackbar ' + color">
    <div class="snackbar__content">
      <div class="snackbar_msg">{{ message }}</div>
      <div class="close">
        <button @click="$emit('closeSnackbar')">X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    message: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: "success",
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/sass/globalColors.scss";
@import "./style.scss";
</style>
