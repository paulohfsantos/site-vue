<template>
  <section class="projects">
    <main>
      <h2>Projects</h2>
      <div class="projects-list">
        <!-- after organizing the projects, I will loop this -->
        <!-- <div class="projects-list-item">
          <div class="project-image">
            <img src="@/assets/ashe_2.jpg" alt="" />
          </div>
          <div class="projects-list-item-description">
            <h3>Project 2</h3>
          </div>
        </div> -->
        <Card title="proj-1" :body="body">
          <template>
            <img src="@/assets/ashe_2.jpg" alt="image-alt" />
          </template>
        </Card>

        <div class="projects-list-item">
          <div class="project-image">
            <img src="" alt="" />
          </div>
          <div class="projects-list-item-description">
            <h3>Project 2</h3>
          </div>
        </div>

        <div class="projects-list-item">
          <div class="project-image">
            <img src="" alt="" />
          </div>
          <div class="projects-list-item-description">
            <h3>Project 2</h3>
          </div>
        </div>

        <div class="projects-list-item">
          <div class="project-image">
            <img src="" alt="" />
          </div>
          <div class="projects-list-item-description">
            <h3>Project 2</h3>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import Card from "@/components/Card/Card.vue";

export default {
  name: "Projects",
  components: {
    Card,
  },

  data: () => ({
    body: "this is the body, this is the body, this is the body, this is the body, this is the body, this is the body, this is the body, this is the body",
  }),
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
