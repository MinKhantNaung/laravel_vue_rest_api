import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'skillIndex',
      component: () => import('../views/skills/SkillIndex.vue')
    },
    {
      path: '/skills/create',
      name: 'skillCreate',
      component: () => import('../views/skills/SkillCreate.vue')
      },
    {
      path: '/skills/edit/:id',
      name: 'skillEdit',
      component: () => import('../views/skills/SkillEdit.vue')
    },
  ]
})

export default router
