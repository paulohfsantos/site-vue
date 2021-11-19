<template>
  <a :href="to" target="_blank">
    <div class="card">
      <div class="img">
        <slot></slot>
      </div>
      <div class="card-header">
        <h2>{{ title }}</h2>
        <span v-for="(tech, i) in techs" :key="i"> {{ tech }}, </span>
      </div>
      <div class="card-body">
        {{ body }}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    imageAlt: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: true,
    },
    techs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
