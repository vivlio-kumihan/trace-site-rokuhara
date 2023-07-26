<!-- $ npm run dev -->
<!-- JavaScriptのコードが入る -->
<script setup>
  const flag = true
  const isActive = true
  const isBlack = true
  const isWhite = true
  const isOrage = 'bgColorOrange'
  const isYello = 'colorYello';
</script>

<template>
  <h1>Vue 3 入門</h1>
  <!-- class属性 -->
  <!-- <p class="active">v-bindでクラス属性を変更してみる。</p> -->
  <!-- :classディレクティブの値にオブジェクトを設定。クラス名をキーに値に設定した変数をいれる。 -->
  <!-- <p :class="{ active: flag }">class attribute active</p> -->
  <!-- 通常のクラス定義と併用できる。 -->
  <!-- <p class="underLine" :class="{ active: flag }">class attribute active</p> -->
  <!-- 通常のクラスを:classディレクティブの値として複数を『''』で括り、真偽値を当ててスタイルをつけることができる。 -->
  <!-- <p :class="{ 'underLine active': flag }">underline</p> -->
  <!-- 変数の値の真偽値が真であるとき、『.active』のスタイルを充てる。 -->
  <!-- <p :class="flag && 'active'">flag active color red</p> -->
  <!-- if条件節で判定する。 -->
  <!--<p :class="flag ? 'active' : 'underLine'">if条件節で判定する。</p>-->
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