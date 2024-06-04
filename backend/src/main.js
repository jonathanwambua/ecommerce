import { createApp } from 'vue'
import store from './store'
import './style.css'
import App from './App.vue'
import './index.css'

createApp(App)
    .use(store)
    .mount('#app')
