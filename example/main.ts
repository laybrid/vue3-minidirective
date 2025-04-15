import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import loading from '../src/loading/core/directive'

createApp(App).directive('loading',loading).mount('#app')
