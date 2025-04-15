import { createWebHistory, createRouter } from "vue-router";
import { AboutPage, HomePage, ServicePage } from "../pages";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/services", component: ServicePage, name: "service" },
  { path: "/about", component: AboutPage, name: "about" },
  // { path: "/#contact", component: HomePage, name: "contact" },
  // { path: "/:pathMatch(.*)*", name: "notfound", component:  },
];

const router = createRouter({
  linkActiveClass: 'transition ease-in-out delay-50 hover:bg-transparent rounded lg:bg-white py-1.5 px-9 rounded-3xl',
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;
