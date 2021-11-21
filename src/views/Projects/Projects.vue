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
import store from "@/store";
import Card from "@/components/Card/Card.vue";

export default {
  name: "Projects",
  components: {
    Card,
  },

  beforeRouteUpdate(to, from, next) {
    store.commit("resetProjects");
    return next();
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([store.commit("resetProjects"), store.dispatch("getProjects")])
      .then(() => next())
      .catch((err) => {
        // this.snackbar.show = true;
        // this.snackbar.msg = "Error loading projects";
        // this.snackbar.color = "error";
        console.log(err);
      });
  },

  computed: {
    ...mapGetters(["projects"]),
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
