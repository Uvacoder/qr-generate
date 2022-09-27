import { createApp } from 'vue'
import VueQrCode from '@chenfengyuan/vue-qrcode'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import App from './App.vue'

import '@/assets/base.css'
import '@sigveh/basic-ui/dist/style.css'

const app = createApp(App)

app.use(autoAnimatePlugin)
app.component(VueQrCode.name, VueQrCode)

app.mount('#app')
