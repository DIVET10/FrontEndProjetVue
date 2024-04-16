import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Importation des fichiers CSS de Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css'

// Importation de Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
