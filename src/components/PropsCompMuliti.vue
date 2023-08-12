<!-- 型（クラス）で初期化してやる方法 -->
<!-- 
defintProps()関数に変数へクラスを定義したオブジェクトを渡す。
それぞれの変数に親コンポーネントでコンポーネント要素へ属性に設定した値が渡ってくる。
-->
<!-- 
<script setup>
  const props = defineProps({
    message: String,
    name: String
  })
</script>
<template>
  <h2>初めてのコンポーネント</h2>
  <p>{{ props.message }}, {{ props.name }}さん</p>
</template>
-->

<!-- オブジェクトの分割代入を利用する方法 -->
<!-- 
defineProps()関数から props()変数に戻されるデータはオブジェクトなので、
分割代入を利用することもできる。
props(コンポーネント間で受け渡しするデータ)の中から name, message を取り出す。
-->
<script setup>
const { message, name } = defineProps({
  message: String,
  name: String
})
</script>
<template>
  <h2>初めてのコンポーネント</h2>
  <p>{{ message }}, {{ name }}</p>
</template>
