import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/index.css'

import App from './App.vue'
import router from './router'

// Additional Package
import Dropzone from 'dropzone-vue'
import 'dropzone-vue/dist/dropzone-vue.common.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Dropzone)

app.mount('#app')
