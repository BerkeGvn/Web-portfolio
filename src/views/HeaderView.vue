<template>
  <header class="header">
    <div class="header-text-container">
      <h1 class="header-main">
        <span class="lang-span">
          {{ $t('header.main') }}
          <span class="lang-span-sub"> {{ $t('header.mainSub') }}</span></span
        >

        <span class="header-main-span">{{ $t('header.span') }}</span>
      </h1>
      <h2 class="header-sub-header">{{ $t('header.sub') }}</h2>
      <img class="blob" src="../../background-square.svg" alt="a background blob" />
    </div>
  </header>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
gsap.registerPlugin(ScrollTrigger)
const { locale } = useI18n()

onMounted(() => {
  //Change the font size according to language
  if (locale.value === 'ja') {
    const header = document.querySelector('.lang-span')
    const subHeader = document.querySelector('.header-sub-header')
    header.classList.add('smaller')
    subHeader.classList.add('wider')
  }

  gsap.fromTo(
    '.blob',
    {
      y: 0,
      x: 0
    },
    {
      y: 400,
      x: 200,
      scrollTrigger: {
        trigger: '.header',
        scrub: true,
        start: 'bottom bottom'
      }
    }
  )
})
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.header {
  position: relative;
  font-weight: bold;
  font-style: italic;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  overflow: hidden;
  // For japanese
  & .smaller {
    font-size: var(--h1-size);
    & .lang-span-sub {
      margin-left: -4rem;
      font-size: var(--h3-size);
    }
  }
  & .wider {
    width: 45%;
    margin-left: 25%;
  }
  &-text-container {
    padding: 8rem 4rem;
    position: relative;
    margin-top: 8rem;
  }
  &-main {
    font-size: var(--h0-size);
    margin-left: 12%;

    &-span {
      color: var(--blue-1);
      display: block;
      margin-left: 18%;
    }
  }
  &-sub-header {
    font-size: var(--h6-size);
    width: 24%;
    margin-left: 15%;
    color: var(--gray-2);
  }

  img {
    position: absolute;
    display: block;
    z-index: -222;
    left: 40%;
    top: 0;
    width: 118rem;
    max-width: none;
  }
  @media only screen and (max-width: 1600px) {
    img {
      left: 50%;
      width: 100rem;
    }
    &-sub-header {
      width: 30%;
      margin-left: 27%;
    }
  }
  @media only screen and (max-width: 1300px) {
    & .smaller {
      font-size: var(--h3-size);
      & .lang-span-sub {
        margin-left: -2rem;
        font-size: var(--h4-size);
      }
    }

    &-main {
      font-size: var(--h1-size);
      margin-left: 16%;

      &-span {
        margin-left: 20%;
      }
    }
    &-sub-header {
      font-size: var(--h7-size);
      width: 30%;
      margin-left: 32%;
    }
  }
  @media only screen and (min-width: 2000px) {
    img {
      z-index: -222;
      left: 50%;
      width: 120rem;
      max-width: none;
    }
    &-sub-header {
      width: 40%;
      margin-left: 32%;
    }
  }
  @media only screen and (max-width: 1100px) {
    img {
      z-index: -222;
      left: 40%;
      width: 100rem;
      max-width: none;
    }
    &-sub-header {
      font-size: var(--h7-size);
      width: 40%;
      margin-left: 32%;
    }
  }
  @media only screen and (max-width: 950px) {
    img {
      z-index: -222;
      left: 35%;
      width: 100rem;
      max-width: none;
    }
    &-main {
      font-size: var(--h2-size);
      margin-left: 12%;

      &-span {
        margin-left: 16%;
      }
    }
    &-sub-header {
      font-size: var(--h8-size);
      width: 30%;
      margin-left: 25%;
    }
  }
  @media only screen and (max-width: 800px) {
    img {
      left: 35%;
      width: 80rem;
    }
    &-main {
      font-size: var(--h3-size);
      margin-left: 0;

      &-span {
        margin-left: 10%;
      }
    }
    &-sub-header {
      font-size: var(--h8-size);
      width: 40%;
      margin-left: 10%;
    }
  }
  @media only screen and (max-width: 500px) {
    justify-content: center;
    img {
      margin-top: -6rem;
      left: 10%;
      width: 60rem;
    }
    & .smaller {
      font-size: var(--h4-size);
      & .lang-span-sub {
        display: block;
        text-align: center;
        margin-left: -2rem;
        font-size: var(--h6-size);
      }
    }
    & .wider {
      font-size: var(--h8-size);
      margin-left: 30%;
    }
    &-text-container {
      padding: 1rem 0;
      position: relative;
      margin-top: 0;
    }
    &-main {
      font-size: var(--h3-size);
      margin-left: 0;
      margin-top: -15rem;
      &-span {
        margin-left: 30%;
      }
    }
    &-sub-header {
      font-size: var(--h8-size);
      width: 90%;
      margin-left: 10%;
    }
  }
}
</style>
