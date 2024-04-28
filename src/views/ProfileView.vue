<template>
  <section class="profile">
    <div class="profile-photo-container">
      <img class="animate" src="../../images/my-photo.jpg" alt="my photo" />
    </div>
    <div class="profile-main">
      <p class="profile-main-header animate">
        Crafting Digital Experiences and Fostering Creativity
      </p>
      <p class="profile-main-text animate">
        Hey there, I'm Berke, a frontend developer and designer based in Tokyo. Fluent in Turkish,
        English, and Japanese, I thrive on creating digital experiences that resonate across
        cultures. While my formal work experience may still be evolving, I've immersed myself in the
        dynamic world of web development, constantly refining my skills and pushing boundaries over
        the past three years. From sleek designs to seamless functionality, I'm passionate about
        crafting websites that not only appeal to the eye but also provide an intuitive user
        experience. Contact me if you want to collaborate and bring your digital vision to life!
      </p>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.fromTo(
    '.animate',
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 0.8,
      stagger: 0.4,
      scrollTrigger: {
        trigger: '.profile',
        start: 'top center'
      }
    }
  )
})
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.profile {
  background-color: var(--blue-1);
  height: 100vh;
  display: flex;
  align-items: center;
  &-photo-container {
    width: 50%;
    height: 70%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &-main {
    color: var(--white-1);
    padding: 0 2rem;

    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    &-header {
      font-size: var(--h2-size);
      font-weight: bold;
      width: 100%;
    }
    &-text {
      font-size: var(--p0-size);
      width: 90%;
    }
  }
  @media only screen and (max-width: 1600px) {
    &-main {
      &-header {
        font-size: var(--h3-size);
        width: 100%;
      }
      &-text {
        font-size: var(--p0-size);
        width: 90%;
      }
    }
  }
  @media only screen and (max-width: 1300px) {
    &-photo-container {
      margin-right: 1rem;
      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &-main {
      &-header {
        font-size: var(--h5-size);
        width: 100%;
      }
      &-text {
        font-size: var(--p1-size);
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    &-photo-container {
      width: 50%;
      height: 50%;
      margin-right: 0;
    }
    &-main {
      &-header {
        font-size: var(--h6-size);
        width: 100%;
      }
      &-text {
        font-size: var(--p2-size);
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    justify-content: center;
    &-photo-container {
      width: 60%;
      height: auto;
      margin-right: 0;
    }
    &-main {
      width: 100%;
      margin-top: 2rem;
      &-header {
        font-size: var(--h7-size);
        width: 100%;
      }
      &-text {
        font-size: var(--p2-size);
        width: 100%;
      }
    }
  }
}
</style>
