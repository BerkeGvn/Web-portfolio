<template>
  <section class="profile">
    <div class="profile-photo-container">
      <img class="animate" src="../../public/images/berke.webp" alt="my photo" />
    </div>
    <div class="profile-main">
      <p class="profile-main-header animate">
        {{ $t('profile.header') }}
      </p>
      <p class="profile-main-text animate">
        {{ $t('profile.text') }}
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
  padding-right: 2rem;
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

    width: 60%;
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
      width: 90%;
      margin-top: 2rem;
      gap: 2rem;
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
  @media only screen and (max-width: 375px) {
    &-photo-container {
      width: 40%;
      height: auto;
      margin-right: 0;
    }
    &-main {
      margin-bottom: 4rem;
      &-header {
        font-size: var(--h8-size);
        width: 100%;
      }
      &-text {
        font-size: var(--p3-size);
        width: 100%;
      }
    }
    margin-bottom: 6rem;
  }
}
</style>
