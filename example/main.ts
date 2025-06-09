import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import lazy from '../src/lazy/index.ts'
import loading from '../src/loading/index.ts'
import debounce from '../src/debounce/index.ts'
import i18n from '../src/i18n/index.ts'
// assets
import img from './assets/loading-test.gif'
createApp(App).use(loading,{
    img:img
}).use(lazy,{
    loading:img
}).use(debounce).use(i18n).mount('#app')
