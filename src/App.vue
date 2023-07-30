<!-- $ npm run dev -->

<!-- Reactivity -->
<!--
<script setup>
  // Zero
  // クリックしても何も起こらない。
  // count 数が増えないのは定義した count 変数が
  // 『Reactivity』 を持っていないため。
  const count = 0
</script>
<template>
  <h2>Reactivity Zero</h2>
  <button @click="count++">Count is {{ count }}</button>
</template>


<script setup>
  // One-1
  // ref()関数の設定

  // ref()関数をimport
  // ref()関数に『0』の引数を代入して変数countを初期化する。
  // これで変数countはRectiveになる。
  import { ref } from 'vue'
  const count = ref(0);
</script>
<template>
  <h2>Reactivity One</h2>
  <button @click="count++">Count is {{ count }}</button>
</template>


<script setup>
  // One-2
  // ref()関数のラッパー

  import { ref } from 'vue'
  const count = ref('object')
  // 変数countは、オブジェクトでラップされており
  // value プロパティのみを持っている。
  // 値を参照するにはメソッドを送信する。
  console.log(count.value);
</script>
<template></template>


<script setup>
  // Two
  // ref()関数に関数を定義する

  // ref では引数： boolean, string, オブジェクトを取る。
  // 例では数値を取っている。どうやって他の引数を取るのかわからない。
  import { ref } from 'vue'
  const count = ref(0)
  // tmplateタグ内では順次状況によって数値は変化していった、
  // scriptタグ内では無名関数を値にした変数を定義する必要がある。
  const addCount = () => {
    count.value++
  };
</script>
<template>
  <h2>Reactivity Two</h2>
  <button @click="addCount">Count is {{ count }}</button>
</template>


<script setup>
  // Three-1
  // reactive な変数を定義する。
  // カウントアップの動作部はtmplate内で実行する。
  // reactive 関数
  //   reactive では引数：オブジェクトを取る。

  import { reactive } from 'vue'
  // インスタンス『state』に『count』メソッドを送信して値を得る。
  const state = reactive({
    count: 0
  });
</script>
<template>
  <h2>Reactivity Three-1</h2>
  <button @click="state.count++">Count is {{ state.count }}</button>
</template>


<script setup>
  // Three-2
  // 先ほどはtemplate内で動作部を実行したが、今回はscript内で実行させる。
  // reactive()関数で生成したインスタンスに関数を定義する
  import { reactive } from 'vue'
  const state = reactive({
    count: 0
  })
  const addCount = () => {
    state.count++
  };
</script>
<template>
  <h2>Reactivity Three-2</h2>
  <button @click="addCount">Reactive Count is {{ state.count }}</button>
</template>


-->
<script setup>
  // Five
  // ref関数は、template内で動作部を実行することができない。
  // ref関数で生成したインスタンスに関数を定義する
  // ref関数を設定する
  import { ref } from 'vue';
  const state = ref({
    count: 0
  });
  const addCount = () => {
    state.value.count++;
  };
</script>
<template>
  <h2>Reactivity Four</h2>
  <button @click="addCount">Ref Count is {{ state.count }}</button>
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