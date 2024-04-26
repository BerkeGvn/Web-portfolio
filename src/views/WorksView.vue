<template>
  <section class="works">
    <h2 class="works-header">My Works</h2>
    <ProjectDetails
      :name="Projects[0].name"
      :desc="Projects[0].desc"
      :images="Projects[0].images"
    ></ProjectDetails>
  </section>
</template>

<script setup>
import ProjectDetails from '@/components/ProjectDetails.vue'
import Projects from '@/data/projects'
</script>

<style lang="scss" scoped>
.works {
  height: 100vh;
  padding: 0 10rem;
  &-header {
    font-size: var(--h1-size);
    text-align: center;
    font-weight: 700;
    color: var(--gray-2);
  }
}
</style>
