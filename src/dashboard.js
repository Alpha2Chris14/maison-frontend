import { createApp } from "vue";
import DashboardApp from "./DashboardApp.vue";
import router from "./router/dashboardRoutes";

createApp(DashboardApp).use(router).mount("#dashboard");
