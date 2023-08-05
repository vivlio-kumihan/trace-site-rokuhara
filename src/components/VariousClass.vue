<script setup>
const props = defineProps({
  price: Number,
  isAdmin: Boolean
})
</script>
<template>
  <h2>数値を渡したい場合</h2>
  <p>{{ Math.round(props.price * 1.1) }}</p>
  <h2>真偽値を渡したい場合</h2>
  <p v-if="props.isAdmin">管理者です。</p>
  <p v-else>管理者ではありません。</p>
</template>