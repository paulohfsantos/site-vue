<template>
  <div class="modal" :id="`modal-${view}`">
    <div class="modal-content">
      <div class="modal-header">
        <h3>{{ modalTitle }}</h3>
        <span @click="$emit('closeModal')">
          <icon name="close" variant="dark"></icon>
        </span>
      </div>

      <div class="modal-body">text</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",

  props: {
    view: {
      type: String,
      required: true,
    },
    modalTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
