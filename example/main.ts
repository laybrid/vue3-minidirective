import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import lazy from '../src/lazy/index.ts'
import loading from '../src/loading/index.ts'

// assets
import img from './assets/loading-test.gif'
createApp(App).use(loading,{
    img:img
}).use(lazy,{
    loading:img
}).mount('#app')
