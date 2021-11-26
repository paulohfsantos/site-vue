<template>
  <div v-if="visible" :class="'alert ' + status">
    <div class="alert_msg">{{ text }}</div>
    <div class="alert_close">
      <button @click="$emit('closeAlert')">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "success",
    },
  },
};
</script>

<style lang="scss">
@import "@/sass/mixins.scss";
@import "@/sass/globalColors.scss";
@import "./style.scss";
</style>
