<script setup lang="ts">
import { ref } from 'vue';

const text = ref('loading....')
const loading = ref(true)
</script>

<template>
  <div v-loading:[text]="loading" style="color: red;">


  </div>
  <!-- <button @click="loading = !loading">123</button> -->
</template>

<style scoped>
div {
  position: relative;
}
</style>
