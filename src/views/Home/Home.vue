<template>
  <section class="home">
    <div>
      <h2>main site content</h2>

      paginação

      <pagination
        :totalPages="10"
        :perPage="10"
        :currentPage="currentPage"
        @pagechanged="onPageChange"
        :maxVisibleButtons="5"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "@/components/Pagination/Pagination";

export default {
  name: "Home",

  components: { Pagination },

  data: () => ({
    currentPage: 1,
  }),

  methods: {
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
    },
  },

  computed: {
    ...mapGetters(["dialog"]),
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
