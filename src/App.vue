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
<!-- 
<script setup>
  import PropsComp from './components/PropsCompMuliti.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <PropsComp message="こんにちは" name="John" />
</template>
-->

<!-- 初期値の設定 -->

<!-- session 1 -->
<!-- 
コンポーネント側で設定された変数をPropsComp要素で使わなくても
問題なくHTMLに描写できる。
-->
<!-- 
<script setup>
import PropsComp from './components/InitValue.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <PropsComp message="こんにちは" />
</template>
-->

<!-- session 2 -->
<!-- 
変数の初期値を設定
PropsComp要素で属性を指定しなければコンポーネント側で設定している
値が出力される仕組み。
-->
<!-- 
<script setup>
import PropsComp from './components/InitValue.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <PropsComp message="こんにちは" />
  <PropsComp message="こんにちは" name="george" />
</template>
-->

<!-- session 3 -->
<!-- 
属性がなければ警告が出る仕様にする方法
-->
<!-- 
<script setup>
import PropsComp from './components/InitValue.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <PropsComp name="paul"/>
  <PropsComp message="こんにちは" name="linda" />
</template>
-->

<!-- 様々なクラスへ渡す -->
<!-- 
<script setup>
import PropsComp from './components/VariousClass.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
-->
  <!-- 数列クラスを渡す -->
  <!-- 数列クラスで設定されているが、文字列を渡している旨警告が出る。 -->
  <!-- <PropsComp price="100" /> -->

  <!-- 解決法は、v-bind -->
  <!-- 
  <PropsComp v-bind:price="100" />
  -->
  <!-- <PropsComp :price="150" /> -->

  <!-- 真偽値クラスを渡す -->
  <!-- <PropsComp :isAdmin="false" /> -->
<!--   
</template>
-->

<!-- reactiveな変数を渡したい場合 -->
<!-- 
親コンポーネントで定義した reactive な変数を
props を利用して子コンポーネントに渡す方法。
-->
<!-- 
<script setup>
import ReactiveValue from './components/ReactiveValue.vue'
import { ref } from 'vue'
const name = ref('john');
</script>
 -->
<!-- 
  これでは、ref 関数の初期値に設定した"John"が表示されない。
  reactive な変数を props で利用したい場合には
  v-bind を利用する必要がある。
-->
<!-- 
<template>
  <h1>Vue 3 入門</h1>
  <ReactiveValue name="name" />
</template>
-->
<!-- v-bindディレクティブで解決させる。 -->
<!-- 
<template>
  <h1>Vue 3 入門</h1>
  <ReactiveValue :name="name" />
</template>
-->

<!-- reactiveな変数を更新する -->

<script setup>
import { ref } from 'vue'
import ReactiveValue from './components/ReactiveValue.vue'
const name = ref('john')
const changeName = () => {
  name.value = 'yoko'
};
</script>

<template>
  <h1>Vue 3 入門</h1>
  <ReactiveValue :name="name" />
  <button @click="changeName">Change Name</button>
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