import { createRouter, createWebHistory } from "vue-router"
// import Home from '../../pages/Home.vue'
// import About from '../../pages/About.vue'

const routes = [
  {
    path: "/project-team-vue/",
    name: "Home",
    component: () => import("../../pages/Home.vue"),
  },
  {
    path: "/project-team-vue/about",
    name: "About",
    component: () => import("../../pages/About.vue"),
  },
  {
    path: "/project-team-vue/contact",
    name: "Contact",
    component: () => import("../../pages/Contact.vue"),
  },
  {
    path: "/project-team-vue/profolio",
    name: "Profolio",
    component: () => import("../../pages/Profolio.vue"),
  },
  {
    path: "/project-team-vue/test",
    name: "Test",
    component: () => import("../../pages/Test.vue"),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
