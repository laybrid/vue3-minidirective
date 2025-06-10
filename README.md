# Vue3-minidirective
you can find some useful vue3 directives

## Install
~~~
npm i vue3-minidirective
~~~

## Directive table

| Directive | Description                          |
| --------- | ------------------------------------ |
| v-loading | display animation when loading data. |
| v-lazy | lazy loading of Images |  
| v-debounce | button debounce |  
| v-i18n | language switching |  

## Usage

###  v-loading
#### Basic usage
Just need to bind boolean value.<br>
main.js:
~~~js
import { createApp } from 'vue'
import App from './App.vue'
import{ loading } from 'vue3-minidirective'

createApp(App).use(loading).mount('#app')
~~~
template:
~~~html
<template>
  <div class="home" v-loading="loading">
  </div>
</template>
~~~
#### Customization
You can customize the incoming loading image to replace the default image.<br>
main.js:
~~~js
import { createApp } from 'vue'
import App from './App.vue'
import{ loading } from 'vue3-minidirective'
import myImg from 'loading.gif'

createApp(App).use(loading,{
    img: myImg
}).mount('#app')
~~~
template:
~~~html
<template>
  <div class="home" v-loading:[loadingText]="loading">
  </div>
</template>
~~~
Custom loading text

#### Loading Options

| Key  | Description      | Type   | Default |
| ---- | ---------------- | ------ | ------- |
| img  | src of the image | String | ----    |

### v-lazy
#### Basic usage
Just replace src with v-lazy.<br>
main.js:
~~~js
import { createApp } from 'vue'
import App from './App.vue'
import{ lazy } from 'vue3-minidirective'
import myImg from 'myimg.png'

createApp(App).use(lazy,{
  loading: myImg
}).mount('#app')
~~~
template:
~~~html
<template>
  <div>
    <ul>
        <li v-for="item in list" :key="item.id" class="item">
            <img v-lazy="item.imgurl" alt=""width="400" height="400">
        </li>
    </ul>
  </div>
</template>
~~~
#### Lazy Options
| Key  | Description      | Type   | Default |
| ---- | ---------------- | ------ | ------- |
| loading  | default src of the image | String | ----    |
| error  | 	src of the image upon load fail| String | ----    |

### v-debounce
#### Basic usage
Just bind an event to the button<br>
main.js
~~~js
import { createApp } from 'vue'
import App from './App.vue'
import{ debounce } from 'vue3-minidirective'


createApp(App).use(debounce).mount('#app')
~~~
template:
~~~html
<template>
  <div>
  <button  v-debounce:200="handler">debounce</button>
  <p>点击次数：{{ count }}</p>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const count = ref(0)

function handler() {
    count.value++
}
</script>
~~~
Set the time of the timer by parameter，The default value is 300ms

### v-i18n
#### Basic usage
Language switching is achieved only through instructions and hooks<br>
main.js
~~~js
import { createApp } from 'vue'
import App from './App.vue'
import{ i18n } from 'vue3-minidirective'


createApp(App).use(i18n).mount('#app')
~~~
template:
~~~html
<template>
   <h1 v-i18n="{ en: 'The Little Prince', zh: '小王子', fr: 'Le Petit Prince' }"></h1>
   <p  v-i18n="{
            en: 'By Antoine de Saint-Exupéry',
            zh: '作者：安托万·德·圣-埃克苏佩里',
            fr: 'Par Antoine de Saint-Exupéry' }">
   </p>
  <button @click="setLanguage('en')">English</button>
  <button @click="setLanguage('zh')">中文</button>
  <button @click="setLanguage('fr')">Français</button>
  <span>当前语言：{{ currentLanguage }}</span>
</template>

<script setup lang='ts'>
import { useLanguage } from 'vue3-minidirective'

const { currentLanguage, setLanguage } = useLanguage()
</script>

<style scoped>
button {
    margin: 0 5px;
    padding: 10px 20px;
    background: #d4af37;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
}

button:hover {
    background: #b8860b;
}
</style>
~~~
1. Use the v-i18n to preset content for each language
2. Use useLanguage hooks to view and set the currentLanguage(The default value is 'zh')
