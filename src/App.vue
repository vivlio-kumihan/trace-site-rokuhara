<!-- $ npm run dev -->

<!-- Computed property -->
<!-- 
定義済みの変数を利用して計算、加工を行うことで
元のデータとは異なる形でユーザに表示することが
できる機能。 -->
<!-- 
Computed propertyを定義した場合は 
reactive な変数が更新されるとその更新に
合わせて再計算、再加工が自動で行われます。
-->
<!-- 
reactive()関数を使ってオブジェクトに値を代入
HTMLで出力する。
-->
<!-- 
<script setup>
  import { reactive } from 'vue';
  const user = reactive({
    firstName: 'Nobuyuki',
    lastName: 'Takahiro'
  });
</script>
<template>
  <h1>Computed Property</h1>
  <h2>fullName: {{ user.firstName }} {{ user.lastName }}</h2>
</template>
-->

<!-- computed propertyを使って表示させる。  -->
<!-- 
<script setup>
  import { reactive, computed } from 'vue'
  const user = reactive({
    firstName: 'Nobuyuki',
    lastName: 'Takarhiro'
  });
  // returnを付けたらいけた。
  // const fullName = computed(() => {
  //   return `${ user.firstName } ${ user.lastName }`
  // });
  // ショートハンド
  const fullName = computed(() => `${ user.firstName } ${ user.lastName }`);
</script>
<template>
  <h1>Computed Property</h1>
  <h2>fullName: {{ fullName }}</h2>
</template>
-->

<!-- リストと分岐の動作確認 -->
<!-- 
定義済みの変数を Computed propertyで
加工することでユーザに表示している。
-->
<!-- 
<script setup>
  import { computed } from 'vue'
  const user = [
    { id: 1, name: '髙廣信之', email: 'nob@email.com', admin: true },
    { id: 2, name: '髙廣和恵', email: 'kazu@email.com', admin: false },
    { id: 3, name: '髙廣茉李', email: 'mari@email.com', admin: false }
  ]
  const adminUser = computed(() => {
    return user.filter((user) => user.admin === true)
  })
</script>
<template>
  <h1>リストと分岐の動作確認</h1>
  <div v-for="user in adminUser" :key="user.id">
    <div>{{ user.id }}番: {{ user.name }}, email: {{ user.email }}</div>
  </div>
</template>
-->

<!-- Computed VS Function -->
<!-- 
マスタッシュの中で関数を利用する場合は Computed propertyと異なり
関数の名前の後ろに()が必要です。
-->
<!-- 
利点: Computed propertyはキャッシュ機能を持っている。
-->
<!-- 
<script setup>
  import { reactive, computed } from 'vue'
  const user = reactive({
    firstName: 'nobuyuki',
    lastName: 'takahiro'
  })
  const fullName = () => `${ user.firstName } ${ user.lastName }`
</script>
<template>
  <h1>Computed VS Function</h1>
  <h2>fullName: {{ fullName() }}</h2>
</template>
-->

<!-- ちょっと横道: 関数を変数で持ち運べる。 -->
<!-- 
<script setup>
  import { reactive, computed } from 'vue'
  const user = reactive({
    firstName: 'nobuyuki',
    lastName: 'takahiro'
  })
  const randomNum = Math.floor(Math.random() * 10) + 1
  // returnや{}省略してもかけた。
  // const fullName = () => { return `${ user.firstName } ${ user.lastName}` }
  const fullName = () => 
    `${ randomNum } ${ user.firstName } ${ user.lastName}`
    // `${ Math.random() } ${ user.firstName } ${ user.lastName}`

  const cmpFullName = computed(() => 
    `${ randomNum } ${ user.firstName } ${ user.lastName }`)
    // `${ Math.random() } ${ user.firstName } ${ user.lastName }`)

  // Array(5).fill().forEach(() => {
  //   console.log(num)
  // })
</script>
-->
<!-- 
関数 =>
  すべての fullName 関数の実行で Math.randam 関数が
  実行されるため異なる値が表示される。

Computed property => 
  変数cFullName はキャッシュ機能を持っているため
  一度 Math.randam 関数が実行されるだけで後は同じ値を保持する。
-->
<!-- 
<script setup>
  import { reactive, computed } from 'vue'
  const user = reactive({
    firstName: 'nobuyuki',
    lastName: 'takahiro'
  })
  const fullName = () => 
    `${ Math.floor(Math.random() * 10) + 1 } ${ user.firstName } ${ user.lastName}`
  
  const cmpFullName = computed(() => 
    `${ Math.floor(Math.random() * 10) + 1 } ${ user.firstName } ${ user.lastName }`)

</script>
<template>
  <h1>Function</h1>
  <h2>fullName: {{ fullName() }}</h2>
  <h2>fullName: {{ fullName() }}</h2>
  <h2>fullName: {{ fullName() }}</h2>
  <h1>Computed</h1>
  <h2>fullName: {{ cmpFullName }}</h2>
  <h2>fullName: {{ cmpFullName }}</h2>
  <h2>fullName: {{ cmpFullName }}</h2>
</template>
-->

<!-- Computed propertyのキャッシュ機能の再確認 -->
<!-- 
v-model directive(命令・指令)に値を代入し状態を変化させる。
つまり、文字を入力、削除する度に状態が変化する中で、
Computed propertyの Math.randam の値はすべての cmpfullName で一緒。
fullName は文字を変更する度に
すべての fullName で Math.random が実行される。
状態の持ち方の違いを実感できるようにコードの流れを暗記してしまう。
-->
<!-- 
<script setup>
  import { reactive, computed } from 'vue'
  const user = reactive({
    firstName: 'nobuyuki', lastName: 'takahiro'
  })
  const fullName = () => 
    `${ Math.floor(Math.random() * 10) + 1 } ${ user.firstName } ${ user.lastName}`
  
  const cmpFullName = computed(() => 
    `${ Math.floor(Math.random() * 10) + 1 } ${ user.firstName } ${ user.lastName }`)
</script>
<template>
  <h1>Function</h1>
  <h2>fullName: {{ fullName() }}</h2>
  <h2>fullName: {{ fullName() }}</h2>
  <h2>fullName: {{ fullName() }}</h2>
  <h1>Computed</h1>
  <h2>fullName: {{ cmpFullName }}</h2>
  <h2>fullName: {{ cmpFullName }}</h2>
  <h2>fullName: {{ cmpFullName }}</h2>
  <input type="text" v-model="user.firstName">
</template>
-->

<!-- タイミングを確認してみる -->
<!-- コンソールに出力して確認してみる。 -->
<!-- 
<script setup>
  import { reactive, computed } from 'vue'
  const user = reactive({
    firstName: 'nobuyuki', lastName: 'takahiro'
  })
  const fullName = () => {
    console.log('Function fire')
    return `${ Math.floor(Math.random() * 10) + 1 } ${ user.firstName } ${ user.lastName}`
  }
  
  const cmpFullName = computed(() => {
    console.log('Computed fire')
    return `${ Math.floor(Math.random() * 10) + 1 } ${ user.firstName } ${ user.lastName }` 
  });
</script>
<template>
  <h1>Function</h1>
  <h2>fullName: {{ fullName() }}</h2>
  <h2>fullName: {{ fullName() }}</h2>
  <h2>fullName: {{ fullName() }}</h2>
  <h1>Computed</h1>
  <h2>fullName: {{ cmpFullName }}</h2>
  <h2>fullName: {{ cmpFullName }}</h2>
  <h2>fullName: {{ cmpFullName }}</h2>
  <input type="text" v-model="user.firstName">
</template>
-->

<!-- ref関数で定義してみる -->
<!-- 
ref()関数でカウンターを作る。
ボタンを押してカウントアップさせる度に状態が変化する。
Functionとcomputed propertyの違いを見る。
-->
<!-- 
<script setup>
  import { reactive, computed, ref } from 'vue'
  const count = ref(0)
  const user = reactive({
    firstName: 'nobuyuki', lastName: 'takahiro'
  })
  const fullName = () => {
    console.log('Function fire')
    return `${ Math.floor(Math.random() * 10) + 1 } ${ user.firstName } ${ user.lastName}`
  }
  const cmpFullName = computed(() => {
    console.log('Computed Property fire')
    return `${ Math.floor(Math.random() * 10) + 1 } ${ user.firstName } ${ user.lastName }` 
  });
</script>
<template>
  <h1>Function</h1>
  <h2>fullName: {{ fullName() }}</h2>
  <h1>Computed</h1>
  <h2>fullName: {{ cmpFullName }}</h2>
  <button type="button" @click="count++">count is {{ count }}</button>
</template>
-->

<!-- Computed Setter 1 -->
<!-- computed propertyはREAD ONLYと怒られる。 -->
<!-- 
<script setup>
import { reactive, computed } from 'vue'
const user = reactive({
  firstName: 'Jone',
  lastName: 'Lennon'
})
const fullName = computed(() => {
  return `${ user.firstName } ${ user.lastName }`
})
const changeName = () => {
  fullName.value = 'Paul McCartny'
};
</script>
<template>
  <h1>Computed Setter</h1>
  <h2>fullName: {{ fullName }}</h2>
  <button @click="changeName">changeName</button>
</template> 
-->

<!-- Computed Setter 2 -->
<!-- 
Computed Prepertyを使って更新を行いたい場合は直接ではなく
Setter を利用する必要がある。
-->
<script setup>
import { reactive, computed } from 'vue'
const user = reactive({
  firstName: 'Jone',
  lastName: 'Lennon'
})
const fullName = computed({
  get() {
    return `${ user.firstName } ${ user.lastName }`
  },
  set(newValue) {
    const tmpName = newValue.split(' ')
    user.firstName = tmpName[0]
    user.lastName = tmpName[tmpName.length - 1]
  }
})
const changeName = () => {
  fullName.value = 'Paul McCartny'
};
</script>
<template>
  <h1>Computed Setter</h1>
  <h2>fullName: {{ fullName }}</h2>
  <button @click="changeName">changeName</button>
</template>

<style scoped></style>