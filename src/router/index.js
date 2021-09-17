import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(
        /* webpackPreload: true, webpackChunkName: "home" */ "@/pages/home/Home.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: () =>
      import(
        /* webpackChunkName: "error", webpackPreload: true */ "@/pages/error/Error.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)",
    name: "Error",
    component: () =>
      import(
        /* webpackChunkName: "error", webpackPreload: true */ "@/pages/error/Error.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
