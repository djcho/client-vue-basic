import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './interceptors/axios'
import tokenStore from './store/tokenStore' 

createApp(App).use(router).use(tokenStore).mount('#app')
