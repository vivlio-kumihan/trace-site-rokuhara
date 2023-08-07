<!-- $ npm run dev -->

<!-- 最初のコンポーネント -->
<!-- 
- `component`ディレクトリに`Hello.veu`ファイルを格納。
- `template`要素内に埋め込み
- `App.vue`が親コンポーネント、`Hello.vue`が子コンポーネント
-->
<!-- 
<script setup>
  import Hello from './components/Hello.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <Hello />
  <Hello />
  <Hello />
</template>
-->

<!-- ref()関数、reactive()関数の利用 -->
<!-- 
コンポーネントの中では script タグの中で reactivity を持つ
変数を定義するために ref, reactive 関数を利用する。
-->
<!-- 
<script setup>
  import RefReactive from './components/RefReactive.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <RefReactive />
</template>
-->

<!-- Reactiveな変数を表示してみる -->
<!-- 
ボタンを追加してそれぞれの count の数を
ボタンをクリックで増やせるように設定する。
また、コンポーネントは自由に差し込んでいけることと
それぞれの関数が別々に稼働することも確認数する。
-->
<!-- 
<script setup>
  import ValueRefReactive from './components/ValueRefReactive.vue'
  import Hello from './components/Hello.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <Hello />
  <ValueRefReactive />
  <ValueRefReactive />
</template>
-->

<!-- Props データを渡す方法 -->
<!-- 
コンポーネントへデータ渡する場合、
コンポーネント要素に適当な名称で属性と値を設定しておく。
コンポーネント側で`defineProps()`関数を使い、
初期化した変数にメソッドを送るという道筋。
コンポーネント要素で設定した属性値を
よしなにコンポーネントで処理してHTMLに出力する方法。
-->
<!-- 
<script setup>
  import PropsComp from './components/PropsComp.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <PropsComp message="Propsの使い方"/>
  <PropsComp message="difineProps関数を利用"/>
</template>
-->

<!-- 複数の props を渡す場合 -->
<!-- 
2つの props を渡したい場合には、
名前の異なる属性名を2つ追加してそれぞれに値を設定する。
-->
<!-- 
<script setup>
  import PropsComp from './components/PropsCompMuliti.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <PropsComp message="こんにちは" name="John" />
</template>
-->

<!-- 初期値の設定 -->

<!-- session 1 -->
<!-- 
コンポーネント側で設定された変数をPropsComp要素で使わなくても
問題なくHTMLに描写できる。
-->
<!-- 
<script setup>
import PropsComp from './components/InitValue.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <PropsComp message="こんにちは" />
</template>
-->

<!-- session 2 -->
<!-- 
変数の初期値を設定
PropsComp要素で属性を指定しなければコンポーネント側で設定している
値が出力される仕組み。
-->
<!-- 
<script setup>
import PropsComp from './components/InitValue.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <PropsComp message="こんにちは" />
  <PropsComp message="こんにちは" name="george" />
</template>
-->

<!-- session 3 -->
<!-- 
属性がなければ警告が出る仕様にする方法
-->
<!-- 
<script setup>
import PropsComp from './components/InitValue.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
  <PropsComp name="paul"/>
  <PropsComp message="こんにちは" name="linda" />
</template>
-->

<!-- 様々なクラスへ渡す -->
<!-- 
<script setup>
import PropsComp from './components/VariousClass.vue'
</script>
<template>
  <h1>Vue3を学ぶ</h1>
-->
  <!-- 数列クラスを渡す -->
  <!-- 数列クラスで設定されているが、文字列を渡している旨警告が出る。 -->
  <!-- <PropsComp price="100" /> -->

  <!-- 解決法は、v-bind -->
  <!-- 
  <PropsComp v-bind:price="100" />
  -->
  <!-- <PropsComp :price="150" /> -->

  <!-- 真偽値クラスを渡す -->
  <!-- <PropsComp :isAdmin="false" /> -->
<!--   
</template>
-->

<!-- reactiveな変数を渡したい場合 -->
<!-- 
親コンポーネントで定義した reactive な変数を
props を利用して子コンポーネントに渡す方法。
-->
<!-- 
<script setup>
import ReactiveValue from './components/ReactiveValue.vue'
import { ref } from 'vue'
const name = ref('john');
</script>
-->
<!-- 
  これでは、ref 関数の初期値に設定した"John"が表示されない。
  reactive な変数を props で利用したい場合には
  v-bind を利用する必要がある。
  なるほど、Vueが管理する変数はVueの仕来たりに従えってことか。
-->
<!-- HTML属性への代入ではダメ -->
<!-- 
<template>
  <h1>Vue 3 入門</h1>
  <ReactiveValue name="name" />
</template>
-->
<!-- v-bindディレクティブ属性で解決する。 -->
<!-- 
<template>
  <h1>Vue 3 入門</h1>
  <ReactiveValue :name="name" />
</template>
-->

<!-- 【reactiveな変数を更新する】 -->
<!-- 
reative な変数なので親コンポーネントで値を変更した場合に
子コンポーネントで表示されている値が更新されるのかを確認する。
-->
<!-- 
  name: 'yoko'　オブジェクトではダメ
  オブジェクトにメソッドを送信して値を得る。 
-->
<!-- 
親子コンポーネントでbuttonをクリックすると、
changeName関数が発火してname変数の値を変える。
変更された値が子コンポーネントのpropsに渡り、
template要素へ反映される。
-->
<!-- 
重要なことは、
propsを子コンポーネントで直接更新してはいけないというルールがあるということ。
-->
<!-- 
Vueが管理するインスタンスになった。セッターとしてのメソッドも持っているということ。
ただし、子コンポーネントではこのreactiveな変数はString型と定義している。
ということは、
reactiveな変数はObjectのように振る舞えると解釈することにする。 
-->
<!-- const name = ref('john') -->
<!-- name.value = 'yoko' -->
<!-- 
<script setup>
import { ref } from 'vue'
import ReactiveValue from './components/ReactiveValue.vue'
const name = ref('john')
const changeName = () => {
  name.value = 'yoko'
};
</script>
<template>
  <h1>Vue 3 入門</h1>
  <ReactiveValue :name="name" />
  <button @click="changeName">Change Name</button>
</template>
-->

<!-- 
【『渡された props を子コンポーネントで直接更新してはいけない』というルールの理解を
深めるために子コンポーネントで props を更新できるか確認する。】
-->
<!-- 変数が文字列の場合を確認してみる -->

<!-- 
<script setup>
import { ref } from 'vue'
import ReactiveValue from './components/ReactiveValue.vue'
const name = ref('john');
</script>

<template>
  <h1>Vue 3 入門</h1>
  <ReactiveValue :name="name" />
</template> 
-->
<!-- 
結果は、
- 命令は実行されない。
- [Vue warn] Set operation on key "name" failed: target is readonly.  
とコンソールに警告される。
-->
<!-- 
ただし、propsで受け取る型をStringからObjectに変更したら命令は難なく通ってしまう。
確認してみる。
-->
<!-- 
<script setup>
import { ref } from 'vue'
import ReactiveValue from './components/ReactiveValue.vue'
const person = ref({
  name: 'John'
});
</script>

<template>
  <h1>Vue 3 入門</h1>
  <ReactiveValue :person="person" />
</template> 
-->
<!-- 
結果は、普通に通ってしまう。
こういう書き方はしてはいけない。出来るけどしない態度を取るのが教養ってやつか。
親コンポーネントで定義したreactiveな変数を子コンポーネントで更新したい場合は、
`emit`イベントを使うらしい。後で説明する。
-->

<!-- 【class属性の設定を渡す】 -->
<!-- 
コンポーネントでは props を利用せずに id 属性や class 属性など
コンポーネントタグに設定した属性を渡すことができる。
この機能の名前は`fallthrough attribute`という。
<h2 class="active">子コンポーネント</h2>
という具合に子コンポーネントのh2要素にクラスを設定できる。
-->
<!-- 
<script setup>
import KlassAttrToComp from './components/KlassAttrToComp.vue'
</script>

<template>
  <h1>Vue 3 入門</h1>  
  <KlassAttrToComp class="active" />
</template>
-->

<!-- では、子コンポーネントにクラスが設定してある場合の振る舞いを確認する。 -->
<!-- 
確認事項:
- どちらかのクラスが上書きされることがなくマージされる。
- class 属性は props とは別の仕組みで子コンポーネントに渡されること。
-->
<!-- 
<script setup>
import KlassAttrToComp from './components/KlassAttrToComp.vue'
</script>

<template>
  <h1>Vue 3 入門</h1>
  <KlassAttrToComp class="active" />
</template>
-->

<!-- 子コンポーネントのルートの要素に2つの要素が存在する場合はどうなるか？ -->
<!-- 
ルートの要素に2つ以上の要素がある場合には、
どこにもクラス属性は送信されない。 
-->
<!-- 
<script setup>
import KlassAttrToComp from './components/KlassAttrToComp.vue';
</script>

<template>
  <h1>Vue 3 入門</h1>
  <KlassAttrToComp class="active" />
</template>
-->

<!-- 子コンポーネントの要素をdivで括るとその要素にクラス属性が付く。 -->
<!-- 
<script setup>
import KlassAttrToComp from './components/KlassAttrToComp.vue';
</script>

<template>
  <h1>Vue 3 入門</h1>
  <KlassAttrToComp class="active"/>
</template>
-->

<!-- 
Hello タグで設定した class 属性をそのまま子コンポーネントのタグに指定したい
場合には$attrsを利用する。
pタグでclass属性にv-bindを設定し$attrs.class を設定する。
ただし、divの挙動には注意が必要。場所によってclass属性が付いたりつかなかったりする。
-->
<!-- 
<script setup>
import KlassAttrToComp from './components/KlassAttrToComp.vue'
</script>

<template>
  <h1>Vue 3 入門</h1>
  <KlassAttrToComp class="active" />
</template>
-->

<!-- 
ルートの要素に class を適用させたくない場合は
script タグを script setup タグとは別に追加し、
inheritAttrs パラメータを false にすることで対応する。
下記のコードでは div タグへの class の適用はなくなり、
$attrs.class を設定している p タグのみに class が適用される。

英語の知識:
inherit => 継承する
inheritAttrs　=> 属性を継承するパラメーターを無効にするという日本語なわけ。

export default
意訳になる。ここで生成されたインスタンスを親コンポーネントへ送信する際
デフォルトのパラメータはオブジェクトの値ですと言っている。
-->

<script setup>
import KlassAttrToCompVue from "./components/KlassAttrToComp.vue"
</script>

<template>
  <h1>Vue 3 入門</h1>
  <KlassAttrToCompVue class="active" />
</template>


<style>
  #app {
    margin-top: 60px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
  div {
    margin-top: 20px;
  }
  .active {
    font-weight: 900;
    color: green;
  }
  .info {
    border-bottom: 1px solid #333;
  }
</style>