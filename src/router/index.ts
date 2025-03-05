import type { RouteRecordRaw } from 'vue-router'
import { i18n, loadLocaleMessages } from '@/plugins/i18n'
import { createRouter, createWebHistory } from 'vue-router'
import { useNProgress } from '../lib/nprogress'
import 'nprogress/nprogress.css'

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
const nprogress = useNProgress()

router.beforeEach(async (to, from, next) => {
  document.title = `${appName} | ${to.meta.title}`
  nprogress.start()
  const lang = localStorage.getItem('lang')
  await loadLocaleMessages(i18n, lang || 'en')
  return next()
})
router.afterEach(() => {
  nprogress.done()
  window.scrollTo(0, 0)
})

export default router
