<!-- $ npm run dev -->

<!-- v-if, v-if-else, v-else -->
<!-- v-if ディレクティブを利用することで要素単位またはブロック単位で
      表示・非表示または表示内容を変えることができます。 -->

<script setup>
  const errorOne = 'エラーが発生しています。'
  const errorTwo = ''
  const stock = 0
  const errorThree = false
</script>

<template>
  <h1>v-if</h1>
  <!-- 変数`errorOne`に文字列が入っているので`true`だから -->
  <!-- マスタッシュで変数が展開される。 -->
  <p v-if="errorOne">{{ errorOne }}</p>
  
  
  <!-- 変数`errorOne`に文字列が入ってないので`false`だから -->
  <!-- `v-else`でマスタッシュで変数が展開される。 -->
  <p v-if="errorTwo">{{ errorTwo }}</p>
  <p v-else>エラーはありません。</p>
  
  <!-- if条件文の論理だての基本を表している。暗記。-->
  <p v-if="stock > 5">在庫あり</p>
  <p v-else-if="stock === 0">在庫なし</p>
  <p v-else>在庫僅少</p>
  
  <h1>v-show</h1>
  <!-- falseの場合は存在を残す。style="display: none;" --> 
  <!-- システムに優しい --> 
  <p v-if="errorThree">エラーが発生しています。</p>
  <p v-show="errorThree">エラーが発生しています。</p>
</template>

<style scoped>
  p {
    margin-bottom: 10px;
  }
</style>