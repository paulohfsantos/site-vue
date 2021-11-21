<template>
  <div v-if="show" :class="'snackbar ' + color">
    <div class="snackbar__content">
      <div class="snackbar_msg">{{ msg }}</div>
      <div class="close">
        <button @click="$emit('closeSnackbar')">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Snackbar",
  props: {
    msg: {
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

  computed: {
    ...mapGetters(["snackbar"]),
  },
};
</script>

<style lang="scss">
@import "@/sass/globalColors.scss";
@import "./style.scss";
</style>
