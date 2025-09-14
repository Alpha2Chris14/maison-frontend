import { createRouter, createWebHistory } from "vue-router";

import ShopPage from "../views/ShopPage.vue";
import WelcomePage from "../views/WelcomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: WelcomePage,
  },
  {
    path: "/shop",
    name: "Shop",
    component: ShopPage,
  },
  // add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
