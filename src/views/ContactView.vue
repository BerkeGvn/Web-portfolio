<template>
  <section class="contact">
    <h2 class="contact-header">{{ $t('contact.header') }}</h2>
    <ContactDetails class="contact-details-container"></ContactDetails>
    <img src="../../public/ellipse-background.svg" alt="" />
  </section>
</template>

<script setup>
import ContactDetails from '@/components/ContactDetails.vue'
</script>

<style lang="scss" scoped>
.contact {
  height: 90vh;

  &-header {
    font-size: var(--h1-size);
    text-align: center;
    font-weight: 700;
    color: var(--gray-2);
  }

  position: relative;
  & img {
    position: absolute;
    right: 0;
    bottom: -4rem;
    z-index: -2;
    width: 80rem;
  }
  @media only screen and (max-width: 1600px) {
    &-header {
      font-size: var(--h2-size);
    }
  }
  @media only screen and (max-height: 700px) {
    margin-top: 4rem;
  }
  @media only screen and (max-width: 1100px) {
    & img {
      width: 60rem;
    }
  }
  @media only screen and (max-width: 950px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-header {
      font-size: var(--h3-size);
    }
    & img {
      position: absolute;
      right: 0;
      bottom: -5rem;
      z-index: -2;
      width: 50rem;
    }
  }
  @media only screen and (max-width: 500px) {
    &-header {
      font-size: var(--h4-size);
    }
  }
}
</style>
