import { createRouter, createWebHistory } from "vue-router";

import DashboardPage from "../views/User/DashboardPage.vue";
import ProfileManagement from "../views/User/ProfileManagementPage.vue";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardPage,
  },
  {
    path: "/profile",
    name: "ProfileManagement",
    component: ProfileManagement,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
