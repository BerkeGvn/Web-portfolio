<template>
  <section class="skills">
    <div class="skills-container">
      <div class="skills-content">
        <p class="skills-content-header">{{ $t('skills.header') }}</p>
        <p class="skills-content-text">
          {{ $t('skills.text') }}
        </p>
        <div class="skills-content-list-container">
          <ul class="skills-content-list skills-content-list-1">
            <li class="skills-content-list-item">HTML</li>
            <li class="skills-content-list-item">CSS</li>
            <li class="skills-content-list-item">JavaScript(TS)</li>
            <li class="skills-content-list-item">Vue</li>
            <li class="skills-content-list-item">Nuxt</li>
          </ul>
          <ul class="skills-content-list skills-content-list-2">
            <li class="skills-content-list-item">React</li>
            <li class="skills-content-list-item">Next</li>
            <li class="skills-content-list-item">UI/UX</li>
            <li class="skills-content-list-item">Figma</li>
            <li class="skills-content-list-item">Adobe Illustrator</li>
          </ul>
        </div>
      </div>
      <div class="skills-asset">
        <img class="stack-icons stack-icons-figma" src="../../figma.svg" alt="" />
        <img class="stack-icons stack-icons-vue" src="../../vue.svg" alt="" />
        <img class="stack-icons stack-icons-ts" src="../../typescript.svg" alt="" />
        <img class="stack-icons stack-icons-sass" src="../../sass.svg" alt="" />
        <img class="stack-icons stack-icons-react" src="../../react.svg" alt="" />
        <img src="../../berke.svg" alt="" />
      </div>
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
    '.skills-content-list-item',
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.skills',
        start: 'top center',
        toggleActions: 'restart none none reset'
      }
    }
  )
  gsap.to('.stack-icons-vue', {
    duration: 3.5,
    y: -20,
    repeat: -1,
    yoyo: true
  })
  gsap.to('.stack-icons-ts', {
    duration: 3.5,
    y: -10,
    x: 10,
    repeat: -1,
    yoyo: true
  })
  gsap.to('.stack-icons-react', {
    duration: 1.5,
    x: 15,
    repeat: -1,
    yoyo: true
  })
  gsap.to('.stack-icons-sass ', {
    duration: 5.5,
    y: -20,
    x: 15,
    repeat: -1,
    yoyo: true
  })
  gsap.to('.stack-icons-figma ', {
    duration: 6,
    y: 20,
    x: 15,
    repeat: -1,
    yoyo: true
  })
})
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.skills {
  height: 100vh;
  padding: 10rem;
  &-asset {
    position: relative;
  }
  & .stack-icons {
    position: absolute;
    display: block;
    width: 5rem;
    &-figma {
      bottom: 20%;
      left: -8rem;
      transform: rotate(-0.05turn);
    }
    &-vue {
      left: 0;
      top: -3rem;
      transform: rotate(-0.05turn);
    }
    &-ts {
      left: 50%;
      top: -5rem;
      transform: rotate(0.05turn);
    }
    &-sass {
      right: -5rem;
      bottom: 24%;
      transform: rotate(0.15turn);
    }
    &-react {
      right: -2rem;
      top: 20%;
      transform: rotate(0.15turn);
    }
  }
  img {
    width: 50rem;
  }
  &-container {
    background-color: var(--yellow-1);
    height: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 10rem;
  }
  &-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    &-header {
      font-size: var(--h6-size);
      font-weight: bold;
      color: var(--pink-1);
    }
    &-text {
      color: var(--gray-2);
      font-size: var(--p2-size);
      background-color: var(--white-1);
      padding: 1rem 2rem;
      border-radius: 10px;
      font-weight: 500;
      width: 70%;
    }
    &-list-container {
      display: flex;
    }
    &-list {
      font-size: var(--p3-size);
      font-weight: 500;
      &-1 {
        color: var(--pink-1);
      }
      &-2 {
        color: var(--blue-1);
      }
      &-item {
        background-color: var(--white-1);
        border-radius: 10px;
        padding: 1rem 2rem;
        text-align: center;
        margin: 2rem;
      }
    }
  }
  @media only screen and (max-width: 1600px) {
    img {
      width: 45rem;
    }
  }
  @media only screen and (max-width: 1300px) {
    img {
      width: 30rem;
    }
  }
  @media only screen and (max-width: 1100px) {
    img {
      width: 25rem;
    }
    &-content {
      align-items: center;
      text-align: center;
    }
  }
  @media only screen and (max-width: 950px) {
    padding: 5rem;
    &-container {
      flex-direction: column-reverse;
      justify-content: center;
      padding: 1rem;
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      &-header {
        font-size: var(--h7-size);
      }
      &-text {
        font-size: var(--p3-size);
        width: 70%;
      }

      &-list {
        font-size: var(--p4-size);

        &-item {
          padding: 1rem 2rem;
          text-align: center;
          margin: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 2rem;
    & .stack-icons {
      position: absolute;
      display: block;
      width: 3rem;
      &-ts {
        top: -3rem;
      }
      &-figma {
        left: -5rem;
      }
    }
    img {
      width: 20rem;
    }
    &-content {
      &-header {
        font-size: var(--h7-size);
      }
      &-text {
        font-size: var(--p3-size);
        width: 70%;
      }

      &-list {
        font-size: var(--p5-size);

        &-item {
          padding: 1rem 1rem;
          text-align: center;
          margin: 1rem;
        }
      }
    }
  }
  @media only screen and (max-width: 375px) {
    img {
      width: 15rem;
    }
  }
}
</style>
