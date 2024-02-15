<template>
  <header class="header">
    <div class="header-text-container">
      <h1 class="header-main">Hey, I am <span class="header-main-span">Berke</span></h1>
      <h2 class="header-sub-header">Lorem ipsum dolor sit amet consectetur.</h2>
      <img src="../../public/background-square.svg" alt="a background blob" />
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
}
</style>
