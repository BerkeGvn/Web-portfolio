<template>
  <section class="works">
    <h2 class="works-header">My Works</h2>
    <Carousel :wrap-around="true">
      <p>hasdf</p>
      <Slide v-for="project in Projects" :key="project.name">
        <ProjectDetails
          :name="project.name"
          :desc="project.desc"
          :images="project.images"
        ></ProjectDetails>
      </Slide>

      <template #addons>
        <Navigation class="carousel__arrow" />
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<script setup>
import ProjectDetails from '@/components/ProjectDetails.vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

import Projects from '@/data/projects'
</script>

<style lang="scss" scoped>
.works {
  height: 100vh;

  &-header {
    font-size: var(--h1-size);
    text-align: center;
    font-weight: 700;
    color: var(--gray-2);
  }
}
</style>
