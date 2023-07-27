<!-- $ npm run dev -->
<!-- JavaScriptのコードが入る -->
<script setup>
  // 変数を生成させるときにはじゅうぶん注意する。
  let message = 'hello world'
  const upperCase = ()=> {
    message = message.toUpperCase()
  }
  upperCase();
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p v-text="message"></p>
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