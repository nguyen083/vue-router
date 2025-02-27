import { VueQueryPlugin } from '@tanstack/vue-query'
import { createNotivue } from 'notivue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'notivue/notification.css'
import 'notivue/animations.css'
import 'notivue/notification-progress.css'

const app = createApp(App)
const notivue = createNotivue({
  position: 'top-center',
  notifications: {
    global: {
      duration: 3000,
    },
  },
})
app.use(createPinia())
app.use(router)
app.use(notivue)
app.use(VueQueryPlugin)
app.mount('#app')
