<template>
  <section class="skills">
    <div class="skills-container">
      <div class="skills-content">
        <p class="skills-content-header">Lorem ipsum consectetur.</p>
        <p class="skills-content-text">
          Lorem ipsum dolor sit amet consectetur. Lorem habitasse posuere adipiscing id dignissim
          nibh sollicitudin.
        </p>
        <div class="skills-content-list-container">
          <ul class="skills-content-list skills-content-list-1">
            <li class="skills-content-list-item">HTML</li>
            <li class="skills-content-list-item">CSS</li>
            <li class="skills-content-list-item">JavaScript</li>
            <li class="skills-content-list-item">Vue</li>
            <li class="skills-content-list-item">Nuxt</li>
          </ul>
          <ul class="skills-content-list skills-content-list-2">
            <li class="skills-content-list-item">React</li>
            <li class="skills-content-list-item">UI/UX</li>
            <li class="skills-content-list-item">Figma</li>
            <li class="skills-content-list-item">Adobe Illustrator</li>
          </ul>
        </div>
      </div>
      <div class="skills-asset">
        <img src="../../skills-asset.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.skills {
  height: 100vh;
  padding: 10rem;
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
      color: var(--white-1);
      font-size: var(--p2-size);
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
}
</style>
