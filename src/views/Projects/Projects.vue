<template>
  <section class="projects">
    <main>
      <h2>Projects</h2>
      <div class="projects-list">
        <div v-for="(item, index) in projects" :key="index">
          <Card
            :techs="item.techs"
            :to="item.url"
            :title="item.name"
            :body="item.description"
          >
            <img :src="item.image" :alt="item.name" />
          </Card>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "@/components/Card/Card.vue";

export default {
  name: "Projects",
  components: {
    Card,
  },

  mounted() {
    Promise.all([
      this.$store.commit("resetProjects"),
      this.$store.dispatch("getProjects"),
    ])
      .then(() => {
        this.snackbar.show = true;
        this.snackbar.msg = "Page loaded";
        this.snackbar.color = "success";
        this.snackbar.timeout = 3000;
      })
      .catch(() => {
        this.snackbar.show = true;
        this.snackbar.msg = "Error loading projects";
        this.snackbar.color = "error";
      });

    // dismiss snackbar after timeout
    setTimeout(() => {
      this.snackbar.show = false;
    }, this.snackbar.timeout);
  },

  computed: {
    ...mapGetters(["projects", "snackbar"]),
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
