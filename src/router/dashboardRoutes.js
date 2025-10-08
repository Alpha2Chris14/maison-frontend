import { createRouter, createWebHistory } from "vue-router";

import DashboardPage from "../views/User/DashboardPage.vue";
import ProfileManagement from "../views/User/ProfileManagementPage.vue";
import WalletPage from "../views/User/WalletPage.vue";
import ProductPage from "../views/User/ProductPage.vue";
import OrdersPage from "../views/User/OrdersPage.vue";
import TransactionsPage from "../views/User/TransactionsPage.vue";
import LogoutPage from "../views/User/LogoutPage.vue";

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
  {
    path: "/wallet",
    name: "Wallet",
    component: WalletPage,
  },
  {
    path: "/products",
    name: "Product",
    component: ProductPage,
  },
  {
    path: "/orders",
    name: "Orders",
    component: OrdersPage,
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: TransactionsPage,
  },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   component: SettingsPage,
  // }
  {
    path: "/logout",
    name: "Logout",
    component: LogoutPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
