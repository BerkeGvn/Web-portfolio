<template>
  <label for="locale"> </label>
  <select v-model="$i18n.locale" id="locale">
    <option v-for="locale in $i18n.availableLocales" :value="locale" :key="locale">
      {{ locale === 'en' ? 'EN' : '日本語' }}
    </option>
  </select>
</template>

<script setup></script>

<style lang="scss" scoped>
select {
  cursor: pointer;
  &:hover {
    color: var(--blue-1);
  }
  option {
    text-align: center;
  }
}
</style>
