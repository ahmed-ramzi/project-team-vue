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
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
