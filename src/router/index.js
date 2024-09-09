import SellerChannelViews from "@/views/SellerChannelViews.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sellerchannel",
      name: "sellerchannel",
      component: SellerChannelViews,
      meta: { hideHeaderViews: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      meta: { hideHeaderViews: true },
    },
  ],
});

export default router;
