<template>
  <div class="projects">
    <div class="projects-ss">
      <a :href="props.links[1]" target="_blink">
        <div class="projects-ss-big">
          <img :src="props.images[0]" alt="A screenshot of my project" />
        </div>
        <div class="projects-ss-small">
          <img :src="props.images[1]" alt="A screenshot of my project" />
          <img :src="props.images[2]" alt="A screenshot of my project" />
        </div>
      </a>
    </div>
    <div class="projects-details">
      <h3 class="projects-details-header">{{ props.name }}</h3>
      <p class="projects-details-description">
        {{ props.desc }}
      </p>
      <div class="projects-details-links">
        <a :href="props.links[0]" target="_blink">
          <MdiGithub class="projects-details-links-icon"></MdiGithub>
          <span class="link-desc">Code</span>
        </a>
        <a :href="props.links[1]" target="_blink">
          <MdiLinkVariant class="projects-details-links-icon"></MdiLinkVariant>
          <span class="link-desc">Demo</span>
        </a>
        <a v-if="props.links[2]" :href="props.links[2]" target="_blink">
          <DeviconFigma class="projects-details-links-icon"></DeviconFigma>
          <span class="link-desc">Design</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import MdiGithub from '~icons/mdi/github'
import MdiLinkVariant from '~icons/mdi/link-variant'
import DeviconFigma from '~icons/devicon/figma'

const props = defineProps({
  name: String,
  desc: String,
  images: Array,
  links: Array
})
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 0 10rem;

  &-ss {
    width: 90rem;
    &-big {
      & img {
        width: 100%;
        padding: 0 1rem;
      }
    }
    &-small {
      & img {
        width: 50%;
        padding: 1rem;
      }
    }
  }

  &-details {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    &-header {
      font-size: var(--h2-size);
      font-weight: 600;
      color: var(--blue-2);
      text-align: center;
    }
    &-description {
      flex: 1;
      font-size: var(--p1-size);
      color: var(--gray-2);
      margin-left: 2rem;
    }
    &-links {
      align-self: flex-end;
      display: flex;
      gap: 4rem;
      & a {
        font-size: 4rem;
        transition: all 0.5s;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        color: var(--gray-2);
        & .link-desc {
          font-size: 2rem;
        }
        &:hover {
          color: var(--blue-1);
        }
        &:nth-child(2) {
          &:hover {
            color: var(--yellow-1);
          }
        }
        &:last-child {
          -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
          filter: grayscale(100%);
          &:hover {
            -webkit-filter: grayscale(0); /* Safari 6.0 - 9.0 */
            filter: grayscale(0);
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1600px) {
    &-details {
      &-header {
        font-size: var(--h3-size);
      }
    }
  }
  @media only screen and (max-width: 1300px) {
    &-ss {
      width: 60rem;
      &-big {
        & img {
          width: 100%;
          padding: 0 1rem;
        }
      }
      &-small {
        & img {
          width: 50%;
          padding: 1rem;
        }
      }
    }
    &-details {
      &-header {
        font-size: var(--h4-size);
      }
      &-description {
        font-size: var(--p2-size);
      }
    }
  }
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;

    &-ss {
      width: 50rem;
      &-big {
        & img {
          width: 100%;
          padding: 0 1rem;
        }
      }
      &-small {
        & img {
          width: 50%;
          padding: 1rem;
        }
      }
    }
    &-details {
      width: 90%;
      margin-top: 2rem;

      &-header {
        font-size: var(--h5-size);
      }
      &-description {
        font-size: var(--p3-size);
        margin: 0;
      }
      &-links {
        align-self: center;
        & a {
          font-size: 3.5rem;
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 0 8rem;
    margin-bottom: 4rem;
    &-ss {
      width: 50rem;
      padding: 0 2rem;
      &-big {
        & img {
          width: 100%;
          padding: 0 2rem;
        }
      }
      &-small {
        display: none;
      }
    }
    &-details {
      width: 100%;
      gap: 2rem;
      &-header {
        font-size: var(--h6-size);
      }
      &-description {
        font-size: var(--p4-size);
      }
      &-links {
        align-self: center;
        & a {
          font-size: 3.5rem;
        }
      }
    }
  }
}
</style>
