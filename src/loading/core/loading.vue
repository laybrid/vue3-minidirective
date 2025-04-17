<template>
  <div class="loading-wrap">
    <div class="text-center">
      <img :src="imgSrc" width="24" height="24">
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue';
import loadingGif from '../assets/loading.gif';
const title = ref('')
const imgSrc = ref(loadingGif)

function setTitle(newTitle: string) {
  title.value = newTitle
}

function setImg(newImg: string) {
  imgSrc.value = newImg
}

defineExpose({ setTitle, setImg })
</script>

<style scoped>
.loading-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}

.text-center {
  text-align: center;
}

.text-center p {
  margin: 5px 0;
  font-size: 12px;
  color: gray;
}
</style>
