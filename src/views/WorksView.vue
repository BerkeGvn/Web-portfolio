<template>
  <section class="works">
    <h2 class="works-header">My Works</h2>
    <div class="works-container">
      <div class="works-ss">
        <div class="works-ss-big">
          <img src="../../images/ojala.png" alt="A screenshot of my project" />
        </div>
        <div class="works-ss-small">
          <img src="../../images/ojala-s-1.png" alt="A screenshot of my project" />
          <img src="../../images/ojala-s-2.png" alt="A screenshot of my project" />
        </div>
      </div>
      <div class="works-details">
        <h3 class="works-details-header">OJALA</h3>
        <p class="works-details-description">
          E-Commerce furniture shop with a sleek, modern UI using Vue.js, SCSS, and Typescript. With
          dynamic interactions, responsive design, and visually stunning aesthetics.
        </p>
        <div class="works-details-links">
          <a href=""> <MdiGithub class="works-details-links-icon"></MdiGithub></a>
          <a href=""> <MdiLinkVariant class="works-details-links-icon"></MdiLinkVariant></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MdiGithub from '~icons/mdi/github'
import MdiLinkVariant from '~icons/mdi/link-variant'
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
  &-container {
    display: flex;
    margin-top: 4rem;
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
