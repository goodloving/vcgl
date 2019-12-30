import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/actionsheet",
    name: "actionsheet",
    component: () => import("../demos/ActionSheetDemo.vue")
  },
  {
    path: "/button",
    name: "button",
    component: () => import("../demos/ButtonDemo.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
