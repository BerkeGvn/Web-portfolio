<template>
  <nav class="nav" ref="nav">
    <div class="nav-large">
      <ul class="nav-first-links">
        <li class="nav-first-links-link">
          <a href="#">
            <img src="../../public/favicon.svg" alt="" />
          </a>
        </li>
        <li class="nav-first-links-link">
          <a href="#profile">{{ $t('nav.about') }}</a>
        </li>
        <li class="nav-first-links-link">
          <a href="#skills">{{ $t('nav.skills') }}</a>
        </li>
        <li class="nav-first-links-link">
          <a href="#works">{{ $t('nav.works') }}</a>
        </li>
        <li class="nav-first-links-link">
          <a href="#contact">{{ $t('nav.contact') }}</a>
        </li>
      </ul>
      <ul class="nav-second-links">
        <li class="nav-second-links-link">
          <a href="https://github.com/BerkeGvn" target="_blank">
            <MdiGithub></MdiGithub>
          </a>
        </li>
        <li><LanguageSwitcher></LanguageSwitcher></li>
      </ul>
    </div>
    <div class="nav-small">
      <div class="nav-button" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="nav-small-list">
        <ul class="nav-first-links">
          <li class="nav-first-links-link" @click="toggleMenu">
            <a href="#profile">{{ $t('nav.about') }}</a>
          </li>
          <li class="nav-first-links-link" @click="toggleMenu">
            <a href="#skills">{{ $t('nav.skills') }}</a>
          </li>
          <li class="nav-first-links-link" @click="toggleMenu">
            <a href="#works">{{ $t('nav.works') }}</a>
          </li>
          <li class="nav-first-links-link" @click="toggleMenu">
            <a href="#contact">{{ $t('nav.contact') }}</a>
          </li>
        </ul>
        <ul class="nav-second-links">
          <li class="nav-second-links-link">
            <a href="https://github.com/BerkeGvn" target="_blank">
              <MdiGithub></MdiGithub>
            </a>
          </li>
          <li><LanguageSwitcher></LanguageSwitcher></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import MdiGithub from '~icons/mdi/github'
import LanguageSwitcher from './LanguageSwitcher.vue'

import { ref } from 'vue'

const nav = ref(null)
let lastScrollY = 0 // Store previous scroll position

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY
  const scrollDirection = scrollY > lastScrollY ? 'down' : 'up'
  lastScrollY = scrollY // Update last scroll position

  if (scrollDirection === 'up') {
    nav.value.classList.remove('hidden')
  } else {
    nav.value.classList.add('hidden')
  }
})

const toggleMenu = () => {
  const menu = document.querySelector('.nav-small-list')
  const button = document.querySelector('.nav-button')
  menu.classList.toggle('active')
  button.classList.toggle('open')
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  background-color: var(--white-1);
  font-size: var(--p0-size);
  color: var(--gray-2);
  width: 100%;
  padding: 0.5rem 4rem;
  z-index: 99;
  transition: transform 0.3s ease-in-out;
  & img {
    height: 3rem;
    margin: 0 auto; /* Center horizontally */
    display: block; /* Remove any default inline spacing */
  }
  &-large {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & ul {
      display: flex;
      gap: 4rem;
      & li {
        transition: all 0.5s;
        &:hover {
          color: var(--blue-1);
        }
      }
    }
  }
  &-small {
    display: none;
  }
  &.hidden {
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
  }
  @media only screen and (max-width: 950px) {
    right: 0;

    padding: 0;
    background-color: transparent;

    & .icon {
      position: absolute;
      z-index: 99;
      right: 0;
      font-size: 4rem;
      margin-top: 1rem;
      margin-right: 2rem;
    }
    &-large {
      display: none;
    }
    &-small {
      display: block;
      position: relative;
      transition: all 0.5s;

      &-list {
        width: 100vw;
        background-color: var(--white-1);
        position: absolute;
        transition: all 0.5s;
        text-align: center;
        transform: translateY(-40rem);
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
        gap: 4rem;
        box-shadow: 1px 0.5px 8px var(--gray-2);
        & li {
          margin-bottom: 1rem;
        }
      }
      & .active {
        background-color: var(--white-1);
        transform: translateY(0);
      }
    }
  }

  .nav-button {
    width: 4rem;
    height: 45px;
    position: absolute;
    right: 0;
    margin: 2rem 2rem;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    z-index: 111;
  }

  .nav-button span {
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: var(--gray-1);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }
  .nav-button span:nth-child(1) {
    top: 0px;
  }

  .nav-button span:nth-child(2),
  .nav-button span:nth-child(3) {
    top: 14px; /* Adjust the gap size here */
  }

  .nav-button span:nth-child(4) {
    top: 29px;
  }

  .nav-button.open span:nth-child(1) {
    top: 14px;
    width: 0%;
    left: 50%;
  }

  .nav-button.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .nav-button.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .nav-button.open span:nth-child(4) {
    top: 14px;
    width: 0%;
    left: 50%;
  }
}
</style>
