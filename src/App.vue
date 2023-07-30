<!-- $ npm run dev -->

<!-- 配列・オブジェクト -->

<script setup>
  const lang = ['JavaScript', 'HTML', 'CSS']
  const users = [
    {id: 1, name: '髙廣信之', email: 'nob@email.com', admin: true},
    {id: 2, name: '髙廣和恵', email: 'kaz@email.com', admin: false},
    {id: 3, name: '髙廣茉李', email: 'mari@email.com', admin: false}
  ]
  const nob = {
    id: 1,
    name: 'nobuyuki Takahiro',
    email: 'nob@email.com',
    admin: true
  }
  const clickBTN = () => {
    console.log('click BTN!')
  }
  const clickBtnArg = (arg) => {
    console.log(arg)
  }
  const clickBtnArgAnother = (arg) => {
    console.log(arg)
  }
  const dbClickBTN = () => {
    console.log('duble click BTN!')
  }
  const mouseEnter = () => {
    console.log('mouse over!')
  }
  const mouseLeave = () => {
    console.log('mouse leave!')
  }
  const clickOnEvent = (e) => {
    console.log(e.target)
    e.target.style.backgroundColor = 'red'
  }
  const send = () => {
    console.log('send')
  }

  // ページのリロードを防ぐため event の
  // オブジェクトの preventDefault を利用する
  // ことができます。
  // preventDefault メソッドを実行するで
  // submit のデフォルトの動作をキャンセルする
  // ことができます。
  const pdSend = (e) => {
    e.preventDefault()
    console.log('send')
  }
  // イベント修飾子を使って同じことをやってみる。
  const pdSendModifier = () => {
    console.log('pdSendModifier')
  }
</script>

<template>
  <h1>配列・オブジェクト</h1>
  <h2>配列</h2>
  <!-- 配列の値を出力する。--> 
  <p>{{ lang[0] }}</p>
  <p>{{ lang[1] }}</p>
  <p>{{ lang[2] }}</p>

  <!-- v-forで回す。シンプル。-->
  <p v-for="l in lang" :key="l">{{ l }}</p>

  <h2>オブジェクト</h2>
  <template v-for="(user, idx) in users" :key="user">
    <ul>
      <li>{{ idx }}. </li>
      <li>{{ user.id }}</li>
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
    </ul>
  </template>

  <template v-for="value in nob" :key="value">
    <p>
      {{ value }}
    </p>
  </template>

  <dl class="key-in-obj">
    <template v-for="(value, key) in nob" :key="value">
      <div>
        <dt>{{ key }}</dt>
        <dd>{{ value }}</dd>
      </div>
    </template>
  </dl>

  <template v-for="user in users" :key="user.id">
    <ul class="obj-in-arr">
      <li v-for="(value, key) in user" :key="value">
        <span>{{ key }}:</span>{{ value }}
      </li>
    </ul>
  </template>

  <h2>配列と分岐</h2>
  <div v-for="user in users" :key="user.id">
    <div v-show="!user.admin">{{ user.name }} is not admin.</div>
  </div>

  <h2>clickイベント</h2>
  <!-- クリックをVueに渡す。 -->
  <button @click="clickBTN">クリック！</button>
  <!-- ダブルクリックは渡せない。 --> 
  <button @dbclick="dbClickBTN">ダブルクリックが効かない！</button>
  <!-- マウスのenter, leave つまりマウスをかざす動作を渡す。
        2つの動作をひとつにまとめたい。--> 
  <button @mouseenter="mouseEnter">マウスをかざす</button>
  <button @mouseleave="mouseLeave">マウスが通過する</button>
  <!-- クリックしたタイミングで引数を渡すことができる。
        また、引数を他の変数に渡すこともできる。 -->
  <button @click="clickBtnArg('hello'), clickBtnArgAnother('こんにちは')">2つのイベントを起動させる</button>

  <h2>eventオブジェクト</h2>
  <!-- $eventを渡すとHTMLをやり取りすことになる。
        背景色を変える。toggleしたい!! -->
  <button @click="clickOnEvent($event)">イベントを渡す</button>

  <h2>event修飾子</h2>
  <!-- イベント名の後に.修飾子をつけることで機能を追加することができる。-->
  <!-- 例えば form タグの submit が実行されるとページのリロードが
        必ず行われます。ページのリロードを防ぐためには event オブジェクトを
        利用して event.preventDefault を実行する必要があります。-->

  <form action="" @submit="send">
    <button>送信ボタンを押す=>コンソールにsendが残らない</button>
  </form>

  <!-- preventDefaultを使う -->
  <form action="" @submit="pdSend($event)">
    <button>preventDefaultを適用した送信</button>
  </form>

  <!-- イベント修飾子版 --> 
  <form action="" @submit.prevent="pdSendModifier">
    <button>イベント修飾子を使う</button>
  </form>
</template>

<style scoped>
  p {
    margin-bottom: 10px;
  }
  ul {
    display: flex;
  }

  ul + ul {
    margin-top: 20px;
  }

  ul.key-in-obj {
    flex-direction: column;
  }
  
  .key-in-obj dt, .key-in-obj dd {
    margin-bottom: 10px
  }

  .key-in-obj div {
    display: flex;
    gap: 20px;
  }
  .key-in-obj div dt {
    width: 50px;
  }
  button {
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 5px;
  }
</style>