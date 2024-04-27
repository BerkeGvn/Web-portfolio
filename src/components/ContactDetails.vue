<template>
  <div class="contact-details">
    <p>Currently looking for a job.</p>
    <p>Feel free to contact me!</p>
    <ul class="contact-details-list">
      <li>
        <a
          class="contact-details-list-links contact-details-list-links-hub"
          href="https://github.com/BerkeGvn"
          target="_blank"
        >
          <MdiGithub></MdiGithub><span class="contact-details-list-links-span">/BerkeGvn</span></a
        >
      </li>
      <li>
        <a
          class="contact-details-list-links contact-details-list-links-mail"
          href="mailto:berkegvn@gmail.com"
        >
          <MdiEmail></MdiEmail
          ><span class="contact-details-list-links-span">berkegvn@gmail.com</span></a
        >
      </li>
      <li>
        <a class="contact-details-list-links contact-details-list-links-loc" @click.prevent="">
          <MdiLocation></MdiLocation><span class="contact-details-list-links-span">Tokyo</span></a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import MdiEmail from '~icons/mdi/email'
import MdiGithub from '~icons/mdi/github'
import MdiLocation from '~icons/mdi/location'
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
}
</style>
