<template>
    <div v-loading:[text]="loading" style="color: red;"> </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const text = ref('loading....')
const loading = ref(true)
</script>

<style scoped>
div {
    position: relative;
}
</style>