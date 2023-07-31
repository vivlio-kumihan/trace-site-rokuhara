<!-- $ npm run dev -->

<!-- Form -->

<!-- ReactiveではないFormの状態 -->
<!-- 
<script setup>
  const message = 'hello world'
  const clickButton = () => {
    console.log(message)
  }
</script>

<template>
  <h1>Form</h1>  
  <p>{{ message }}</p>
  <input type="text" v-model="message">
  <div><button @click="'clickButton'">click</button></div>
</template>
-->

<!-- ref()関数を使ってみる。
  v-model ディレクティブを利用することで input 要素で
  入力した値と reactive な変数を同期させることができる。

  v-model ディレクティブを利用している場合に input 要素に
  value 属性を設定してエラーになるため利用することはできない。
  placehoder 属性を利用することはできる。-->
<!--  
<script setup>
  import { ref } from 'vue'
  const message = ref('hello world')
  const clickButton = () => {
    console.log(message.value)
  }
  </script>
  
  <template>
  <h1>Form</h1>
  <p>{{ message }}</p>
  <input type="text" v-model="message">
  <div><button @click="clickButton">click</button></div>
  </template>
-->

<!-- reactive()関数を使ってみる。
      引数にオブジェクトで設定を行う。

      v-model ディレクティブを利用している場合に input 要素に
    　value 属性を設定してエラーになるため利用することはできない。
      placehoder 属性を利用することはできる。
-->
<!-- 
<script setup>
  import { reactive } from 'vue'
  const form = reactive({
    message: 'hello world'
  })
  const clickButton = () => {
    console.log(form.message)
  }
  </script>
  
  <template>
  <h1>Form</h1>
  <p>{{ form.message }}</p>
  <input type="text" v-model="form.message">
  <div><button @click="clickButton">click</button></div>
  </template>
-->

<!-- Modifiers(修飾子)を使ってみる。-->
<!-- v-model には修飾子を設定することができ修飾子を利用することで
      v-model の動作を変更することができる。
      lazy
      trim
      number
-->

<!-- 
laze
  input 要素に文字を入力すると即時に reactive な変数へ反映されていた。
  修飾子を lazy をつけることで文字の入力毎ではなく
  input 要素に入力後、エンターを押したら反映される。
  この挙動は気持ちいい。
-->
<!-- 
<script setup>
  import { reactive } from 'vue'
  const form = reactive({
    message: 'hello world'
  })
  const clickButton = () => {
    console.log(form.message)
  }
</script>

<template>
  <h1>Form</h1>
  <p>{{ form.message }}</p>
  <input type="text" v-model.lazy="form.message">
  <div><button @click="clickButton">click</button></div>
</template>
-->

<!-- 
trim
  input 要素の先頭や最後に空白がある場合取り除きたい場合に
  修飾子の trim をつけることで自動で取り除いてくれる。
  入力の段階では前後の空白は入力したまま反映されるが、
  クリックボタンを押した瞬間に trim が作動する。
-->

<!-- 
<script setup>
  import { reactive } from 'vue'
  const form = reactive({
    message: 'hello world'
  })
  const clickButton = () => {
    console.log(form.message)
  }
</script>

<template>
  <h1>Form</h1>
  <p>{{ form.message }}</p>
  <input type="text" v-model.trim="form.message">
  <div><button @click="clickButton">click</button></div>
</template>
-->

<!-- 
number
  JavaScript では input 要素に入力した値を取得すると
  文字列として扱う。
  数字とし取得したい場合は修飾子の number を設定することで
  数値として取得する。
  type属性 => number: Vue が自動で number に変換する。
  type属性 => text: この時に有効。

  v-model="form.message"
      最初は設定通り数列が入力されている。
      文字列入れる => string
      数列入れる => string

  v-model.number="form.message"
      最初は設定通り数列が入力されている。
      文字列入れる => string
      数列入れる => number
  とちゃんと見分けてくれる。
  入力されたのが文字列か数列で振り分け作業ができることがわかる。
-->
<script setup>
  import { reactive } from 'vue'
  const form = reactive({
    message: 12345
  })
  const clickButton = () => {
    console.log(typeof form.message)
  };
</script>

<template>
  <h1>Form</h1>
  <p>{{ form.message }}</p>
  <input type="text" v-model.number="form.message">
  <div><button @click="clickButton">click</button></div>
</template>

<style scoped>
</style>