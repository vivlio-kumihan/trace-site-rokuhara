<!-- session 1 -->
<!-- 
<script setup>
const props = defineProps({
  message: String,
  name: String
});
</script>
<template>
  <h2>初期値の設定</h2>
  <p>{{ props.message }}, {{ props.name }}</p>
</template>
-->

<!-- session 2 -->
<!-- 変数の初期値を設定 -->
<!-- 
<script setup>
const props = defineProps({
  message: String,
  name: { type: String, default: 'john'}
});
</script>
<template>
  <h2>初期値の設定について</h2>
  <p>{{ props.message }}, {{ props.name }}</p>
</template>
-->

<!-- session 3 -->
<!-- 属性がなければ警告が出る仕様にする方法 -->
<!-- 
<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true
  },
  name: { type: String, default: 'john'}
});
</script>
<template>
  <h2>初期値の設定について</h2>
  <p>{{ props.message }}, {{ props.name }}</p>
</template>
-->
