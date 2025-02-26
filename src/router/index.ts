import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const appName = import.meta.env.VITE_APP_NAME

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'Home' },
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/products',
    children: [
      {
        path: '',
        name: 'Products',
        component: () => import('@/views/ListProductView.vue'),
        meta: {
          title: 'List Product',
        },
      },
      {
        path: '/products/:id',
        name: 'ProductDetail',
        component: () => import('@/views/ProductView.vue'),
        meta: {
          title: 'Product detail',
        },
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
router.beforeEach((to) => {
  document.title = `${appName} | ${to.meta.title}`
})

export default router
