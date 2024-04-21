import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Contenedor from './components/Contenedor.element.vue'
import Horario from './components/Horario.element.vue'
import Porcion from './components/Porcion.element.vue'
import Timer from './components/Timer.element.vue'

const app = createApp(App);
app
    .component('Contenedor', Contenedor)
    .component('Porcion', Porcion)
    .component('Timer', Timer)
    .component('Horario', Horario);

app.mount('#app')
