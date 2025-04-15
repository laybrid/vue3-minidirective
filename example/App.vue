<script setup lang="ts">
import { ref } from 'vue';

const text = ref('loading....')
</script>

<template>
  <div v-loading:[text]="true">


  </div>
</template>

<style scoped>
</style>
