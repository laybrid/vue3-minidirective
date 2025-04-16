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
|           |                                      |

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
createApp(App).use(loading,{
    img:require("loading.gif")
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

## Loading Options

| Key  | Description      | Type   | Default |
| ---- | ---------------- | ------ | ------- |
| img  | src of the image | String | ----    |