import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: {
        hidelayout: false,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        hidelayout: true,
      },
    },
    {
      path: "/category/:id",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
      meta: {
        hidelayout: false,
      },
    },
    {
      path: "/products/:pid",
      name: "products",
      component: () => import("../views/ProductsListView.vue"),
      meta: {
        hidelayout: false,
      },
    },
    {
      path: "/productdetail/:pid",
      name: "productsdetail",
      component: () => import("../views/ProductDetailsView.vue"),
      meta: {
        hidelayout: false,
      },
    },
  ],
});

export default router;
