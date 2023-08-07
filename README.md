# Vue3 入門

## 属性を操作する
<!-- 
v-bindでstyle属性にアクセス。オブジェクトの値に変数を格納。
script要素で値を代入されたものがHTML上で展開する。
 -->
```html
<script setup>
// 変数を生成させるときには十分に注意する。
let colorRed = 'red'
let fontWeight = '900'
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p v-bind:style="{ color: colorRed, fonrWeight: fontWeight }">hello</p>
  <p :style="{ color: colorRed, fonrWeight: fontWeight }">hello</p>
</template>

<style scoped>
  .active {
    color: #f00;
    font-weight: 900;
  }
```

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

## if条件分岐でコントロール

### if条件節で判定

条件に合わせて複数のクラスをtogglできる。

```html
<template>
  <h1>Vue 3 入門</h1>
  <p :class="flag ? 'active' : 'underLine active'">if条件節で判定</p>
</template>
```

### if条件文

if条件文論理だての基本。
- 1 = true, 0 = false
- v-if      〇〇より多くあり、
- v-else-if 〇〇と同じ、
- v-else    それ以外は

```html
<script setup>
  const stock = 0
</script>

<template>
  <p v-if="stock > 5">在庫あり</p>
  <p v-else-if="stock === 0">在庫なし</p>
  <p v-else>在庫僅少</p>
</template>
```

### v-if, v-showの違い

v-if    => false => 完全に存在を消す
v-show  => false => display: none つまり、システムに優しい。

```html
<script setup>
const flag = false
</script>
<template>
  <p v-if="flag">真偽値でtoggleする。</p>
  <p v-show="flag">真偽値でtoggleする。</p>
</template>
```

## 配列・オブジェクト

### 配列の値を出力する

```html
<script setup>
  const lang = ['JavaScript', 'HTML', 'CSS'];
</script>

<template>
  <p>{{ lang[0] }}</p>
  <p>{{ lang[1] }}</p>
  <p>{{ lang[2] }}</p>
</template>
```

### v-forで回す

`v-for="値 in 配列" :key="任意、大体keyを使う"`
このフォーマットで要素に埋め込む。

```html
<template>
  <p v-for="l in lang" :key="l">{{ l }}</p>
</template>
```

### オブジェクト

オブジェクトのデータをul要素で出力する。

__まずは、オブジェクトの値を出力してみる__

```html
<script setup>
const objectItem = {
  id: 1,
  name: 'nobuyuki Takahiro',
  email: 'nob@email.com',
  admin: true
};  
</script>

<template v-for="obj in objectItem" :key="vale">
  <p>{{ obj }}</p>
</template>
```

__オブジェクトのキーと値を明示して出力する__

dl > template
template > dl この違いが大きい。
templateで包含するとスタイルが効かなくなる。

```html
<dl>
  <template v-for="(value, key) in objectItem" :key="value">
    <div>
      <dt>{{ key }}</dt>
      <dd>{{ value }}</dd>
    </div>
  </template>
</dl>
```

__複数のオブジェクトから値を出力する__

その1 インスタンスのメソッドを充てる方法

```html
<script setup>
const users = [
  {id: 1, name: '髙廣信之', email: 'nob@email.com', admin: true},
  {id: 2, name: '髙廣和恵', email: 'kaz@email.com', admin: false},
  {id: 3, name: '髙廣茉李', email: 'mari@email.com', admin: false}
];
</script>
<template v-for="(user, idx) in users" :key="user">
  <ul>
    <li>{{ idx }}. </li>
    <li>{{ user.id }}</li>
    <li>{{ user.name }}</li>
    <li>{{ user.email }}</li>
  </ul>
</template>
```

その2 v-forで回す方法

二段構えで展開。
`id`キーの出力がダブるので`v-if`で回避処理する。

```html
<template v-for="user in users" :key="user.id">
  <h1 class="identifier">{{ user.id }}</h1>
  <dl class="obj-in-arr">
    <template v-for="(value, key) in user" :key="value">
      <template v-if="key !== 'id'">
        <dt>{{ key }}</dt>
        <dd>{{ value }}</dd>
      </template>
    </template>
  </dl>
</template>
```