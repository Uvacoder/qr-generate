import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueQrCode from '@chenfengyuan/vue-qrcode'

import App from './App.vue'

import '@/assets/base.css'
import '@sigveh/basic-ui/dist/style.css'

const app = createApp(App)

app.use(createPinia())
app.component(VueQrCode.name, VueQrCode)

app.mount('#app')
