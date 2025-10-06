import { createRouter, createWebHistory } from "vue-router";

import ShopPage from "../views/ShopPage.vue";
import WelcomePage from "../views/WelcomePage.vue";
import AboutUs from "../views/AboutUs.vue";

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
  {
    path: "/about",
    name: "About",
    component: AboutUs,
  },
  {
    path: "/shop-details",
    name: "ShopDetails",
    component: () => import("../views/ShopDetails.vue"),
  },
  {
    path: "/shopping-cart",
    name: "ShoppingCart",
    component: () => import("../views/ShoppingCart.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/Checkout.vue"),
  },
  {
    path: "/blog-details",
    name: "BlogDetails",
    component: () => import("../views/BlogsDetails.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/BlogIndex.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  // add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
