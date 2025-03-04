import { i18n, loadLocaleMessages } from '@/plugins/i18n'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createNotivue } from 'notivue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
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
app.use(i18n)
app.use(pinia)
app.use(router)
app.use(notivue)
app.use(VueQueryPlugin)
loadLocaleMessages(i18n.global.locale.value).then(() => {
  app.mount('#app')
})
