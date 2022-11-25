import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/board/grade/:gid',
    component: () => import('@/views/BoardList.vue'), 
  },
  {
    path: '/board/grade/:gid/writeArticle',
    component: () => import('@/views/WriteArticle.vue')
  },
  {
    path: '/error',
    component: () => import('@/views/ErrorPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/error'
  },
  {
    path: '/board/department/:dname',
    component: () => import('@/views/DepartmentBoardList.vue')
  },
  {
    path: '/articles',
    component: () => import('@/views/ArticleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
