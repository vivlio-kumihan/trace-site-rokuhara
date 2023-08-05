# Vue3 入門

## クラス属性を操作する

### v-bindディレクティブで真偽値を使いクラスをtoggleする。

```html
<script setup>
const flag = true;
</script>
<template>
  <h1>Vue 3 入門</h1>
  <!-- :classディレクティブの値にオブジェクトを設定。
        クラス名をキーに値に設定した変数をいれるオブジェクトを書く。 -->
  <p :class="{ active: flag }">class attribute active</p>
</template>
<style>
   .active {
    color: #f00;
    font-weight: 900;
  } 
</style>
```

### 通常のクラス定義と併用できる。

#### 要素へ通常のclass属性に併記してv-bindディレクティブを追加できる。

- class属性underLine => 必須
- v-bindディレクティブactive => script要素内の命令次第でtoggle

```html
<script setup>
const flag = true;
</script>
<template>
  <h1>Vue 3 入門</h1>
  <!-- 併用可能 -->
  <p class="underLine" :class="{ active: flag }">class attribute active</p>
</template>
<style>
  .underLine {
    text-decoration: underline;
  }
   .active {
     color: #f00;
    font-weight: 900;
  } 
</style>
```

#### script要素内で決定するtoggleの結果をクラスへ適用する

- class属性underLine => script要素内の命令次第でtoggle
- v-bindディレクティブactive => script要素内の命令次第でtoggle
  - つまり、toggleスイッチを複数のクラスへ適用可能。

```html
<template>
  <h1>Vue 3 入門</h1>
  <!-- toggleスイッチを複数のクラスへ適用 -->
  <p :class="{ 'underLine active': flag }">both classes</p>
  <p :class="{ 'underLine': flag }">underline only</p>
</template>
```

別の書き方あり。ただし、書き方は上が好み。

```html
<template>
  <h1>Vue 3 入門</h1>
  <!-- toggleスイッチを複数のクラスへ適用 -->
  <p :class="flag && 'underLine active'">both style</p>
  <p :class="flag && 'underLine'">only under line, too</p>
</template>
```

### if条件分岐でコントロール

```html
<template>
  <h1>Vue 3 入門</h1>
  <!-- 条件に合わせて複数のクラスをtogglできる。-->
  <p :class="flag ? 'active' : 'underLine active'">if条件節で判定</p>
</template>
```

## 関数を使う

ディレクティブの値としてtemplate要素の中に埋め込む変数。
その変数を定義したり、定義した変数に関数を充て任意の値を入れ直してtemplate要素へ返す。

```html
<script setup>
  // 変数を生成させる時には、その状態が可変になるか否か
  // 十分に留意してlet, constを振り分ける。
  let message = 'hello world'
  // 関数の定義
  const upperCase = ()=> {
    message = message.toUpperCase()
  }
  // 関数の実行
  upperCase();
</script>

<template>
  <h1>Vue 3 入門</h1>
  <!-- 紐づかせ、値が戻ってくる変数 -->
  <p v-text="message"></p>
  <!-- こちらはマスタッシュで展開 -->
  <p>{{ message }}</p>
</template>
```