import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "../src/assets/styles/reset.css";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

createApp(App).use(store).use(ElementPlus).use(router).mount("#app");
