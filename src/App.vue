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
</script>

<template>
  <h1>配列</h1>
  <!-- 配列の値を出力する。--> 
  <p>{{ lang[0] }}</p>
  <p>{{ lang[1] }}</p>
  <p>{{ lang[2] }}</p>

  <!-- v-forで回す。シンプル。-->
  <p v-for="l in lang" :key="l">{{ l }}</p>

  <h1>オブジェクト</h1>
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

  <ul class="key-in-obj">
    <template v-for="(value, key) in nob" :key="value">
      <div>
        <dt>{{ key }}</dt>
        <dd>{{ value }}</dd>
      </div>
    </template>
  </ul>

  <ul class="obj-in-arr">
    <template>
      <div v-for="user in users" :key="user.id">
        <div v-for="(value, key) in user" :key="value">
          {{ key }}: {{ value }}
        </div>
      </div>
    </template>
  </ul>
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
</style>