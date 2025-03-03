import en from '@/locales/en.json'
import vi from '@/locales/vi.json'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createNotivue } from 'notivue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import '@/assets/main.css'
import 'notivue/notification.css'
import 'notivue/animations.css'
import 'notivue/notification-progress.css'

const pinia = createPinia()
const app = createApp(App)
const notivue = createNotivue({
  position: 'top-center',
  notifications: {
    global: {
      duration: 3000,
    },
  },
})

const lang = localStorage.getItem('lang')
const i18n = createI18n({
  legacy: false,
  locale: lang || 'en', // Language default
  fallbackLocale: 'en',
  messages: { en, vi },
})

app.use(pinia)
app.use(router)
app.use(notivue)
app.use(i18n)
app.use(VueQueryPlugin)
app.mount('#app')
