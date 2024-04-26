<template>
  <div class="projects">
    <div class="projects-ss">
      <div class="projects-ss-big">
        <img :src="props.images[0]" alt="A screenshot of my project" />
      </div>
      <div class="projects-ss-small">
        <img :src="props.images[1]" alt="A screenshot of my project" />
        <img :src="props.images[2]" alt="A screenshot of my project" />
      </div>
    </div>
    <div class="projects-details">
      <h3 class="projects-details-header">{{ props.name }}</h3>
      <p class="projects-details-description">
        {{ props.desc }}
      </p>
      <div class="projects-details-links">
        <a href=""> <MdiGithub class="projects-details-links-icon"></MdiGithub></a>
        <a href=""> <MdiLinkVariant class="projects-details-links-icon"></MdiLinkVariant></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import MdiGithub from '~icons/mdi/github'
import MdiLinkVariant from '~icons/mdi/link-variant'

const props = defineProps({
  name: String,
  desc: String,
  images: Array
})
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  margin-top: 4rem;
  &-header {
    font-size: var(--h1-size);
    text-align: center;
    font-weight: 700;
    color: var(--gray-2);
  }

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
      & a {
        font-size: 4rem;
        transition: all 0.5s;
        &:hover {
          color: var(--blue-1);
        }
        &:last-child {
          margin-left: 2rem;

          &:hover {
            color: var(--yellow-1);
          }
        }
      }
    }
  }
}
</style>
