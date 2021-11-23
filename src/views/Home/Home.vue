<template>
  <div class="home">
    <main>
      <h2>main site content</h2>
      <Icon name="linkedin" />
    </main>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";

export default {
  name: "Home",
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
