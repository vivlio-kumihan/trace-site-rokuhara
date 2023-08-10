<!-- $ npm run dev -->

<!-- 配列・オブジェクト -->

<script setup>
  const flag = true
  const users = [
    { id: 1, name: '髙廣信之', email: 'nob@email.com', admin: true },
    { id: 2, name: '髙廣和恵', email: 'kaz@email.com', admin: false },
    { id: 3, name: '髙廣茉李', email: 'mari@email.com', admin: false }
  ];
</script>
<!-- 
  # v-forは判別してる
    - 対象が配列かオブジェクトかは自動で見分けている。 
    - 引数には以下のような順番で設定する。
    配列:         値  > インデックス
    オブジェクト:  値 > キー > インデックス

  # v-forは値についても判別している
    - 対象がオブジェクトであれば、そのメソッドを充てて値を取り出せる。

  # 変数のスコープ
    - v-if, v-forで回している中がスコープ範囲。
    - 変数はイミュータブル。
  # 条件文を使った表示の切り替えは必須。
-->
<template>
  <ul>
    <template v-for="(user, idx) in users" :key="user">
      <li>index -> {{ idx }}</li>
      <li>id -> {{ user.id }}</li>
      <li>name -> {{ user.name }}</li>
      <li>email -> {{ user.email }}</li>
      <li>adimin -> {{ user.admin }}</li>
      <li>
        <ul class="inner">
          <template v-for="(value, key, idx) in user" :key="key">
            <li>{{ idx }}: {{ key }} => {{ value }}</li>
          </template>
        </ul>
      </li>
    </template>
  </ul>
  <ul class="judge">
    <template v-for="user in users" :key="user">
      <template v-if="user.admin !== true">
        <template v-for="(value, key, idx) in user" :key="key">
          <li>{{ idx }}: {{ key }} => {{ value }}</li>
        </template>
      </template>
    </template>
  </ul>
</template>

<style>
  .inner li { color: blue; }
  .judge li { color: green; }
</style>