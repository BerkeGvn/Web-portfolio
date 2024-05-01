<template>
  <section class="works">
    <h2 class="works-header">{{ $t('works.header') }}</h2>
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :pagination="{
        clickable: true,
        color: '#FFBA08'
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="project in localizedProjects" :key="project.name">
        <ProjectDetails
          :name="project.name"
          :desc="project.desc[locale]"
          :images="project.images"
          :links="project.links"
        ></ProjectDetails>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import Projects from '@/data/projects'
import ProjectDetails from '@/components/ProjectDetails.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const modules = [Pagination, Navigation]
const { locale } = useI18n()
const localizedProjects = computed(() => Projects)
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
  @media only screen and (max-width: 1600px) {
    &-header {
      font-size: var(--h2-size);
    }
  }
  @media only screen and (max-width: 950px) {
    height: auto;
    &-header {
      font-size: var(--h3-size);
    }
  }
  @media only screen and (max-width: 500px) {
    &-header {
      font-size: var(--h4-size);
    }
  }
}
</style>
