import type { RouteRecordRaw } from 'vue-router'
import ListProductView from '@/views/ListProductView.vue'
import ProductView from '@/views/ProductView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'home' }, // chuyển hướng đến /home khi truy cập localhost:5173
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Shop | Home',
    },
  },
  {
    path: '/products',
    name: 'products',
    component: ListProductView,
    meta: {
      title: 'Shop | List Product',
    },
  },
  {
    path: '/products/:id',
    name: 'product-detail',
    component: ProductView,
    meta: {
      title: 'Shop | Product detail',
    },
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // strict: true, đường dẫn được phân biệt nghiệm ngặt
})
router.beforeEach((to) => {
  document.title = to.meta.title
})

export default router
