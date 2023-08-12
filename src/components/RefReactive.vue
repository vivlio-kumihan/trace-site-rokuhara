<!-- ref()関数、reactive()関数の利用 -->
<script setup>
  import { ref, reactive } from 'vue'
  const count = ref(0)
  const state = reactive({
    count: 1
  })
</script>
<template>
  <h2>初めてのコンポーネント</h2>
  <p>Ref Count: {{ count }}</p>
  <p>Reactive Count: {{ state.count }}</p>
</template>
<style></style>
