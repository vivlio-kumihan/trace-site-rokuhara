<script setup>
const props = defineProps({
  name: String
});
</script>
<template>
  <h2>子コンポーネント</h2>
  <p>Hello {{ props.name }}</p>
</template>


<script setup>
const props = defineProps({
  name: String
})
const changeName = () => {
  props.name = 'paul'
}
</script>