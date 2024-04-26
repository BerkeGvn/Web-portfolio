<template>
  <section class="profile">
    <div class="profile-photo-container">
      <img src="../../images/my-photo.jpg" alt="my photo" />
    </div>
    <div class="profile-main">
      <p class="profile-main-header">Lorem ipsum dolor sit amet consectetur.</p>
      <p class="profile-main-text">
        Lorem ipsum dolor sit amet consectetur. Sed nibh felis facilisis feugiat. Eget mi sed
        consequat facilisis lectus enim.
      </p>
    </div>
  </section>
</template>

<script setup></script>

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
    padding: 2rem;
    margin-top: -10rem;
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    &-header {
      font-size: var(--h2-size);
      font-weight: bold;
      width: 80%;
    }
    &-text {
      font-size: var(--p0-size);
      width: 60%;
    }
  }
}
</style>
