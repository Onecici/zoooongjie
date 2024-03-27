<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance()?.appContext.config.globalProperties

function btn() {
  instance?.$Bus.emit('foo', 11)
}
</script>

<template>
  <main>
    <button @click="btn">传入</button>
  </main>
</template>
