<script setup>
const pdSendModifier = () => {
  console.log('pdSendModifier')
};
</script>

<template>
  <form action="" @submit.prevent="pdSendModifier">
    <button>イベント修飾子を使う</button>
  </form>
</template>