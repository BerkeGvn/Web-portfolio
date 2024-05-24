import { createRouter, createWebHistory } from "vue-router";
import WebPortfolio from '@/WebPortfolio.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: WebPortfolio,

    },

  ],
});


export default router;