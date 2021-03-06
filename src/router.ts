import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/home.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("./views/cart.vue"),
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("./views/order.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
