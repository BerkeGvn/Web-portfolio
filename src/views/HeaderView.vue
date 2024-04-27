<template>
  <header class="header">
    <div class="header-text-container">
      <h1 class="header-main">Hey, I am <span class="header-main-span">Berke</span></h1>
      <h2 class="header-sub-header">Frontend Developer & UI/UX Designer.</h2>
      <img src="../../background-square.svg" alt="a background blob" />
    </div>
  </header>
</template>

<script setup></script>

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
      z-index: -222;
      left: 50%;
      width: 100rem;
      max-width: none;
    }
    &-sub-header {
      width: 30%;
      margin-left: 27%;
    }
  }
  @media only screen and (max-width: 1300px) {
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
