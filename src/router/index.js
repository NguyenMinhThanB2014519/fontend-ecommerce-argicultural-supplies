import SellerChannelViews from "@/views/SellerChannelViews.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/Register/RegisterPage.vue";
import Homepage from "@/views/Homepage.vue";
import CategoryViewsPage from "@/views/CategoriesPage/CategoryViewsPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
      meta: { requiresAuth: true },
      children: [
        {
          path: "/:name",
          component: CategoryViewsPage,
        },
      ],
    },
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
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
      meta: { hideHeaderViews: true },
    },
  ],
});
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth === true) {
//     next("/login");
//   } else {
//     next();
//   }
// });
export default router;
