import { createRouter, createWebHistory } from "vue-router"
// import Home from '../../pages/Home.vue'
// import About from '../../pages/About.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../../pages/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../../pages/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../../pages/Contact.vue"),
  },
  {
    path: "/profolio",
    name: "Profolio",
    component: () => import("../../pages/Profolio.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../../pages/Test.vue"),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
