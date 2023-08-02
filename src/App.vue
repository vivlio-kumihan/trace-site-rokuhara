<!-- $ npm run dev -->
<!-- watcher + ref関数 -->
<!-- 
ref 関数で作成した reactive な変数 count を監視して 
count が更新されたら更新された後の値を表示するように設定を行う。
-->
<!-- 
Count のボタンを押す度に watcher で変更を検知し、
デベロッパーツールのコンソールに count 数が表示される。
-->
<!-- 
<script setup>
  import { ref, watch } from 'vue'
  const count = ref(0)
  watch(count, (count) => {
    console.log('count:', count)
  });
</script>
<template>
  <h1>watch + ref</h1>
  <button @click="count++">Count: {{ count }}</button>
</template>
-->

<!-- 変更後、変更前の値 -->
<!-- 
ref 関数で作成した reactive な変数 count を監視して 
count が更新されたら更新された後の値を表示するように設定を行う。
第一引数に変更後、第二引数に変更前。
-->
<!-- 
<script setup>
  import { ref, watch } from 'vue'
  const count = ref(0)
  watch(count, (count, preCount) => {
    console.log('count:', count)
    console.log('previus count:', preCount)
  });
</script>
<template>
  <h1>watch + ref</h1>
  <button @click="count++">Count: {{ count }}</button>
</template>
-->

<!-- watcher + reactive -->
<!-- 
reactive関数でのwatchは、ref関数と同じような書式では監視対象のインスタンを保持できない。
HTMLで実行用とwatch関数の中で何某かの定義をするため用に無名関数を分けて書く。
-->
<!-- 
<script setup>
  import { reactive, watch } from 'vue'
  const state = reactive({
    count: 0
  })
  // ref関数と同じ書式では解決できない。
  // watch(state.count, (count, preCount) => {
  //   console.log('count:', count)
  //   console.log('previus count:', preCount)
  // })
  watch(
    () => state.count,
    (count, preCount) => {
      console.log('count:', count)
      console.log('previus count:', preCount)
    }
  )
</script>
<template>
  <h1>waticher + reactive</h1>
  <button @click="state.count++">count: {{ state.count }}</button>
</template>
-->

<!-- watcherのOptions -->
<!-- 
先ほどは、reactive 関数で定義した state に countメソッドを送って得たインスタンスに対して操作した。
今度は、state 自身を watch に設定して count を変更した場合の動作も確認する。
これでは、コンソールには何も表示されない。
-->
<!-- 
<script setup>
  import { reactive, watch } from 'vue'
  const state = reactive({
    count: 0
  })
  watch(
    () => state,
    (state, preState) => {
      console.log('state: ', state),
      console.log('previous state: ', preState)
    })
</script>
<template>
  <h1>watcherのOptionss</h1>
  <button @click="state.count++">count: {{ state.count }}</button>
</template>
-->

<!-- deep option -->
<!-- 
state 自身 を watcher に設定して中のオブジェクトの変更を検知するためには、
options の deep を true に変更する必要がある。
なお、deep の設定値を true に変更すると変更は検知することができるが、
count の変更前の値は取得することはできない。
-->
<!-- 
<script setup>
  import { reactive, watch } from 'vue'
  const state = reactive({
    count: 0
  })
  watch(
    () => state,
    (state, preState) => {
      console.log('state: ', state),
      console.log('previous state: ', preState)
    },
    { deep: true }
  );
</script>
<template>
  <h1>watcherのOptionss</h1>
  <button @click="state.count++">count: {{ state.count }}</button>
</template>
-->

<!-- immediate option -->
<!-- 
watcher の処理をページを開いた直後に実行しておきたい場合は
オプションに immediate:true を設定する。
-->
<!-- 
<script setup>
  import { reactive, watch } from 'vue'
  const state = reactive({
    count: 0
  })
  watch(
    () => state,
    (state, preState) => {
      console.log('state: ', state),
      console.log('previous state: ', preState)
    },
    { immediate: true }
  );
</script>
<template>
  <h1>watcherのOptionss</h1>
  <button @click="state.count++">count: {{ state.count }}</button>
</template>
-->

<!-- watchEffect -->
<!-- 
watchEffect関数は、watchのように無名関数に引数を取らない。
ページを開いた時にも一度処理が実行される。
HTML上のそれぞれの動作に対して複数のインスタンを呼び出すことができる。

reactive な変数と computed プロパティの変更の検知は
watchEffect でも行うことができる。
watch のように特定の変数を指定するのではなく 
watchEffect の中に記述した関数で記述されている変数の変更を検知して実行される。
-->
<!-- 
<script setup>
  import { ref, watchEffect } from 'vue'
  const count = ref(0)
  const count2 = ref(100)
  watchEffect(() => {
    // console.log(`${ count.value }`)
    console.log(`${count.value}, ${count2.value}`)
  });
</script>
<template>
  <h1>watchEffect</h1>
  <button @click="count++">Count: {{ count }}</button>
  <button @click="count2++">Count: {{ count2 }}</button>
</template>
-->

<style scoped></style> 