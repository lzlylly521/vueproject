// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import WebHome from './WebHome.vue'
import router from './router'

const webhome = createApp(WebHome)

webhome.use(createPinia())
webhome.use(router)
webhome.use(webhome)

webhome.mount('#webhome')
