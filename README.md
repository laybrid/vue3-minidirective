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