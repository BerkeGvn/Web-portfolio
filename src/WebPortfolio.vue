<template>
  <BaseNavbar></BaseNavbar>
  <HeaderView></HeaderView>
  <ProfileView id="profile"></ProfileView>
  <SkillsView id="skills"></SkillsView>
  <WorksView id="works"></WorksView>
  <ContactView id="contact"></ContactView>
  <BaseFooter></BaseFooter>
</template>

<script setup>
import HeaderView from '@/views/HeaderView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SkillsView from '@/views/SkillsView.vue'
import WorksView from '@/views/WorksView.vue'
import ContactView from '@/views/ContactView.vue'
import BaseFooter from './components/BaseFooter.vue'
import BaseNavbar from './components/BaseNavbar.vue'
</script>

<style></style>
