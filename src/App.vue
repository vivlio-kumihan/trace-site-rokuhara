<!-- $ npm run dev -->
<!-- JavaScriptのコードが入る -->
<script setup>
  // 変数を生成させるときには十分に注意する。
  let colorRed = 'red'
  let fontWeight = '900'
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p :style="{ color: colorRed, fonrWeight: fontWeight }">hello</p>
</template>

<style scoped>
  .active {
    color: #f00;
    font-weight: 900;
  }
  .underLine {
    text-decoration: underline;
  }
  .bgColorBlack {
    background-color: #333;
  }
  .colorWhite {
    color: #fff;
  }
</style>