<template>
  <div>
  <button  v-debounce="handler">debounce</button>
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