<template>
  <label for="locale"> </label>
  <select v-model="$i18n.locale" id="locale">
    <option v-for="locale in $i18n.availableLocales" :value="locale" :key="locale">
      {{ locale === 'en' ? 'EN' : '日本語' }}
    </option>
  </select>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const router = useRouter()
const route = useRoute()
const lang = ref(route.query.lang)
console.log(lang.value)

// if url doesn't have supported language,
if (lang.value === 'en' || lang.value === 'ja') {
  locale.value = lang.value
} else {
  locale.value = 'en'
}

watchEffect(() => {
  router.replace({ path: '/', query: { lang: locale.value } })
})
</script>

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
