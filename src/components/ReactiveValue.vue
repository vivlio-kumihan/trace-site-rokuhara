<!-- reactiveな変数を更新する -->
<!-- 
<script setup>
const props = defineProps({
  name: String
});
</script>
<template>
  <h2>子コンポーネント</h2>
  <p>Hello {{ props.name }}</p>
</template>
-->

<!-- 変数が文字列の場合を確認してみる -->
<!-- 
<script setup>
const props = defineProps({
  name: String
})
const changeName = () => {
  props.name = 'paul'
}
</script>

<template>
  <h2>子コンポーネント</h2>
  <p>Hello {{ props.name }}</p>
  <button @click="changeName">Change Name</button>
</template> 
-->

<!-- 変数がオブジェクトの場合を場合を確認してみる -->
<!-- 
<script setup>
const props = defineProps({
  person: Object
})
const changeName = () => {
  props.person.name = 'yoko'
};
</script>

<template>
  <h2>子コンポーネント</h2>
  <p>Hello {{ props.person.name }}</p>
  <button @click="changeName">Change Name</button>
</template> 
-->
