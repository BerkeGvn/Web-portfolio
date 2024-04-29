<template>
  <div class="contact-details">
    <p>{{ $t('contact.job') }}</p>
    <p>{{ $t('contact.contact') }}</p>
    <ul class="contact-details-list">
      <li class="items">
        <a
          class="contact-details-list-links contact-details-list-links-hub"
          href="https://github.com/BerkeGvn"
          target="_blank"
        >
          <MdiGithub></MdiGithub><span class="contact-details-list-links-span">/BerkeGvn</span></a
        >
      </li>
      <li class="items">
        <a
          class="contact-details-list-links contact-details-list-links-mail"
          href="mailto:berkegvn@gmail.com"
        >
          <MdiEmail></MdiEmail
          ><span class="contact-details-list-links-span">berkegvn@gmail.com</span></a
        >
      </li>
      <li class="items">
        <a class="contact-details-list-links contact-details-list-links-loc" @click.prevent="">
          <MdiLocation></MdiLocation
          ><span class="contact-details-list-links-span">{{ $t('contact.city') }}</span></a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import MdiEmail from '~icons/mdi/email'
import MdiGithub from '~icons/mdi/github'
import MdiLocation from '~icons/mdi/location'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.fromTo(
    '.items',
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.contact-details',
        start: 'top center',
        toggleActions: 'restart none none reset'
      }
    }
  )
})
</script>

<style lang="scss" scoped>
.contact {
  &-details {
    font-size: var(--p0-size);
    color: var(--gray-2);
    text-align: center;
    width: 50%;
    margin: 8rem auto;

    &-list {
      border: 2px solid var(--gray-1);
      padding: 4rem 2rem;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8rem;
      gap: 8rem;
      margin-top: 8rem;
      &-links {
        cursor: pointer;
        transition: all 0.5s;
        &-hub {
          &:hover {
            color: var(--pink-1);
          }
        }
        &-mail {
          &:hover {
            color: var(--yellow-1);
          }
        }
        &-loc {
          &:hover {
            color: var(--blue-1);
          }
        }
        &-span {
          display: block;
          font-size: var(--p1-size);
        }
      }
    }
  }
  @media only screen and (max-width: 1300px) {
    &-details {
      font-size: var(--p0-size);
      color: var(--gray-2);
      text-align: center;
      width: 50%;
      margin: 8rem auto;

      &-list {
        font-size: 6rem;
        &-links {
          &-span {
            display: block;
            font-size: var(--p2-size);
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    &-details {
      &-list {
        border: none;
      }
    }
  }
  @media only screen and (max-width: 950px) {
    &-details {
      font-size: var(--p1-size);
      width: 50%;

      &-list {
        font-size: 4rem;
        &-links {
          &-span {
            font-size: var(--p3-size);
          }
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    &-details {
      font-size: var(--p1-size);
      width: 80%;

      &-list {
        font-size: 4rem;
        gap: 3rem;
        &-links {
          &-span {
            display: block;
            font-size: var(--p4-size);
          }
        }
      }
    }
  }
}
</style>
