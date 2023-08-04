// 型を設定してやる方法
<!--
  <script setup>
    const props = defineProps({
      message: String
    })
  </script>
-->

// 配列を設定してやる方法
// 分かりにくい
<script setup>
  const props = defineProps(['message']);
</script>

<template>
  <h2>初めてのコンポーネント</h2>
  <p>{{ props.message }}</p>
</template>