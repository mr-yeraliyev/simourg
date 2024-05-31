import { createApp } from 'vue'
import './shared/assets/styles/main.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './shared/routes'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
