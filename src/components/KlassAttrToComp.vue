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


<script>
export default { inheritAttrs: false }
</script>

<script setup></script>

<template>
  <div>
    <h2 class="info">子コンポーネント</h2>
    <p :class="$attrs.class">class属性の渡し方を確認中</p>
  </div>
  <!-- <h2 class="info">子コンポーネント</h2>
  <p :class="$attrs.class">class属性の渡し方を確認中</p> -->
</template>