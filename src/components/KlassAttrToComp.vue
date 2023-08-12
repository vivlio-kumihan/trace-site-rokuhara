<!-- 【class属性の設定を渡す】 -->
<!-- 
<script setup></script>  
<template>
  <h2>子コンポーネント</h2>
</template>
-->

<!-- では、子コンポーネントにクラスが設定してある場合の振る舞いを確認する。 -->
<!-- 
<script setup></script>
<template>
  <h2 class="under-line">子コンポーネント</h2>
</template>
-->

<!-- 子コンポーネントのルートの要素に2つの要素が存在する場合はどうなるか？ -->
<!-- 
<script setup></script>
<template>
  <h2 class="info">子コンポーネント</h2>
  <p>class属性の渡し方を確認中</p>
</template>
-->

<!-- 子コンポーネントの要素をdivで括るとその要素にクラス属性が付く。 -->
<!--
<script setup></script>
<template>
  <div>
    <h2 class="info">子コンポーネント</h2>
    <p>class属性の渡し方を確認中</p>
  </div>
</template>
-->

<!-- 
Hello タグで設定した class 属性をそのまま子コンポーネントのタグに指定したい
場合には$attrsを利用する。
pタグでclass属性にv-bindを設定し$attrs.class を設定する。
ただし、divの挙動には注意が必要。場所によってclass属性が付いたりつかなかったりする。
-->
<!--
<script setup></script>
<template>
  <h2 class="info">子コンポーネント</h2>
  <p :class="$attrs.class">class属性の渡し方を確認中</p>
  <div>
    <h2 class="info">子コンポーネント</h2>
    <p :class="$attrs.class">class属性の渡し方を確認中</p>
  </div>
</template>
-->

<!-- 
ルートの要素に class を適用させたくない場合は
script タグを script setup タグとは別に追加し、
inheritAttrs パラメータを false にすることで対応する。
下記のコードでは div タグへの class の適用はなくなり、
$attrs.class を設定している p タグのみに class が適用される。
-->
<!-- 
<script>
export default { inheritAttrs: false }
</script>

<script setup></script>

<template>
  <div>
    <h2 class="info">子コンポーネント</h2>
    <p :class="$attrs.class">class属性の渡し方を確認中</p>
  </div>
</template>
-->

<!-- 【useAttrsによる属性の取得】 -->
<!-- 
  $attrsを利用することで子コンポーネントのタグに設定した
  class属性の設定値を子コンポーネントで利用できることがわかった。
  scriptタグ内で $attrs に含まれる値を確認したい場合には、
  useAttrs を利用することができる。
-->
<!-- 
<script>
export default { inheritAttrs: false }
</script>

<script setup>
// $attrsではなく、useAttrs()関数を使ってみる。
import { useAttrs } from 'vue';
const attrs = useAttrs();
// コードの中で$attrsを使っていることがわかる。
console.log(attrs)
// ```console
// <target>: {…}, <handler>: {…} }
// ​<target>: Object { class: "active", … }
// __vInternal: 1
// ````
</script>

<template>
  <div>
    <h2 class="info">子コンポーネント</h2>
    // $attrs => attrsへ切り替える。
    <p :class="attrs.class">class属性の渡し方を確認中</p>
  </div>
</template>
-->

<!-- 
では、useAttrs を使って class 属性以外の id, style 属性を
子コンポーネントに渡すことができるか確認する。
-->

<script>
export default { inheritAttrs: false }
</script>

<script setup>
import { useAttrs } from 'vue';
const attrs = useAttrs();
console.log(attrs)
</script>

<template>
  <div>
    <h2 class="info">子コンポーネント</h2>
    <p :id="attrs.id">id属性の渡し方を確認中</p>
    <p :class="attrs.class">class属性の渡し方を確認中</p>
    <p :style="attrs.style">style属性の渡し方を確認中</p>
  </div>
</template>

