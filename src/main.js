import { createApp } from 'vue'
import App from './pages/App.vue'

import './assets/css/tailwind.css'

// import clickOutside from './plugins/click-outside.js'

const app = createApp(App)

// app.directive('click-outside', clickOutside);

import {stateSymbol, createStore} from './store/state.js'
app.provide(stateSymbol, createStore());

app.mount('#app')
