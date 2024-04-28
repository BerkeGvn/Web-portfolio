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
  @media only screen and (max-width: 1600px) {
    &-main {
      &-header {
        font-size: var(--h3-size);
        width: 80%;
      }
      &-text {
        font-size: var(--p0-size);
        width: 70%;
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
      margin-top: 0;
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
