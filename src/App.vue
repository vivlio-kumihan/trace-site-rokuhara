<!-- $ npm run dev -->

<!-- 最初のコンポーネント -->
<!-- 
- `component`ディレクトリに`Hello.veu`ファイルを格納。
- `template`要素内に埋め込み
- `App.vue`が親コンポーネント、`Hello.vue`が子コンポーネント
-->
<!-- 
<script setup>
  import Hello from './components/Hello.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <Hello />
  <Hello />
  <Hello />
</template>
-->

<!-- ref()関数、reactive()関数の利用 -->
<!-- 
コンポーネントの中では script タグの中で reactivity を持つ
変数を定義するために ref, reactive 関数を利用する。
-->
<!-- 
<script setup>
  import RefReactive from './components/RefReactive.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <RefReactive />
</template>
-->

<!-- Reactiveな変数を表示してみる -->
<!-- 
ボタンを追加してそれぞれの count の数を
ボタンをクリックで増やせるように設定する。
また、コンポーネントは自由に差し込んでいけることと
それぞれの関数が別々に稼働することも確認数する。
-->
<!-- 
<script setup>
  import ValueRefReactive from './components/ValueRefReactive.vue'
  import Hello from './components/Hello.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <Hello />
  <ValueRefReactive />
  <ValueRefReactive />
</template>
-->

<!-- Props データを渡す方法 -->
<!-- 
コンポーネントへデータ渡する場合、
コンポーネント要素に適当な名称で属性と値を設定しておく。
コンポーネント側で`defineProps()`関数を使い、
初期化した変数にメソッドを送るという道筋。
コンポーネント要素で設定した属性値を
よしなにコンポーネントで処理してHTMLに出力する方法。
-->
<!-- 
<script setup>
  import PropsComp from './components/PropsComp.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <PropsComp message="Propsの使い方"/>
  <PropsComp message="difineProps関数を利用"/>
</template>
-->

<!-- 複数の props を渡す場合 -->
<!-- 
2つの props を渡したい場合には、
名前の異なる属性名を2つ追加してそれぞれに値を設定する。
-->
<script setup>
  import PropsComp from './components/PropsCompMuliti.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <PropsComp message="こんにちは" name="John" />
</template>

<style>
  #app {
    margin-top: 60px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
  div {
    margin-top: 20px;
  }
  button:last-of-type {
    margin-left: 30px;
  }
</style>