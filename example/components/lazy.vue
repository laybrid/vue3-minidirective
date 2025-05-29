<template>
  <div>
    <ul>
        <li v-for="item in list" :key="item.id" class="item">
            <div class="icon">
                <img v-lazy="item.imgurl" alt="" width="400" height="400">
            </div>
            <div>
                <h2>{{ item.name }}</h2>
                <p>{{ item.desc }}</p>
            </div>
        </li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import data from '../data'
const list = reactive(data)
</script>

<style scoped>
.item{
    display: flex;
}
.icon {
    flex: 0 0 60px;
    padding-right: 20px;
}
</style>