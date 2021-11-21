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
        this.$store.commit("changeSnackbar", {
          show: true,
          msg: "Page loaded",
          color: "success",
          timeout: 2000,
        });
      })
      .catch(() => {
        this.$store.commit("changeSnackbar", {
          show: true,
          msg: "Error loading projects",
          color: "error",
          timeout: 2000,
        });
      });

    // dismiss snackbar after timeout
    setTimeout(() => {
      this.snackbar.show = false;
    }, 2000);
  },

  computed: {
    ...mapGetters(["projects", "snackbar"]),
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
