import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FilmView from '@/views/FilmView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/?page=:page\\&search=:search',
      name: 'search',
      component: HomeView,
    },
    {
      path: '/:id',
      name: 'film',
      component: FilmView,
    },
  ],
})

export default router
