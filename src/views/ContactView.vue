<template>
  <section class="contact">
    <h2 class="contact-header">Contact Me</h2>
    <ContactDetails class="contact-details-container"></ContactDetails>
    <img src="../../ellipse-background.svg" alt="" />
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
}
</style>
