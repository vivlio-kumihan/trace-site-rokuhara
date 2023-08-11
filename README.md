# Vue3 入門

## 属性を操作する

`v-bind`を使って`style`属性にアクセスしてみる。
`v-bind, for, if etc`ディレクティブにオブジェクトを渡す形式。

style属性に値を渡してみる。

```html
<template>
  <p :style="{ padding: '0 10px', color: '#fff', backgroundColor: '#333' }">hello</p>
</template>
```
値に『__変数でもあり関数あるもの__』を格納。
このオブジェクトが、`script`要素で値を代入されたりしながらHTML上の要素へ展開される。

```html
<script setup>
// 変数を生成させるときには十分に注意する。
let colorSelect = 'red'
const flag = false
if (flag) {
  const changeColor = () => {
    colorSelect = 'orange'
  }
  changeColor()
}
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p :style="{ color: colorSelect }">hello</p>
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

vueは、対象としているものが配列かオブジェクトを判断している。
`v-for`で対象を回す場合、`value > array`, `value > key > index`の書き方に留意してコード書くこと。

### 配列の値を出力する

配列を設定してインデックスで呼び出してみる。

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

#### まずは、オブジェクトの値を出力してみる

index, key, valueを出力する。

```html
<script setup>
const objectItem = {
  id: 1,
  name: 'nobuyuki Takahiro',
  email: 'nob@email.com',
  admin: true
};  
</script>

<template>
  <ul>
    <template v-for="(value, key, idx) in object" :key="value">
      <li>{{ idx }}</li>
      <li>{{ key }}</li>
      <li>{{ value }}</li>
    </template>
  </ul>
</template>
```

#### 複数のオブジェクトから値を出力する

__その1 オブジェクトのインスタンスへメソッドを充てる方法__

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

__その2 v-forで回す方法__

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

#### 配列、オブジェクトの要素に対して、v-showで表示の振り分け

先ほどのコードでは、
`<template v-if="key !== 'id'">`
を使って条件分岐させた。
要素を`template`以外に変更、
`<div v-if="key !== 'id'">`
通常の要素を使い、システムへの負担を少なくして、admin情報の真偽値で振り分ける。 

```html
<script setup>
  const flag = true
  const users = [
    { id: 1, name: '髙廣信之', email: 'nob@email.com', admin: true },
    { id: 2, name: '髙廣和恵', email: 'kaz@email.com', admin: false },
    { id: 3, name: '髙廣茉李', email: 'mari@email.com', admin: false }
  ];
</script>
<!-- 
  # v-forは判別してる
    - 対象が配列かオブジェクトかは自動で見分けている。 
    - 引数には以下のような順番で設定する。
    配列:         値  > インデックス
    オブジェクト:  値 > キー > インデックス

  # v-forは値についても判別している
    - 対象がオブジェクトであれば、そのメソッドを充てて値を取り出せる。

  # 変数のスコープ
    - v-if, v-forで回している中がスコープ範囲。
    - 変数はイミュータブル。
  # 条件文を使った表示の切り替えは必須。
-->
<template>
  <ul>
    <template v-for="(user, idx) in users" :key="user">
      <li>index -> {{ idx }}</li>
      <li>id -> {{ user.id }}</li>
      <li>name -> {{ user.name }}</li>
      <li>email -> {{ user.email }}</li>
      <li>adimin -> {{ user.admin }}</li>
      <li>
        <ul class="inner">
          <template v-for="(value, key, idx) in user" :key="key">
            <li>{{ idx }}: {{ key }} => {{ value }}</li>
          </template>
        </ul>
      </li>
    </template>
  </ul>
  <ul class="judge">
    <template v-for="user in users" :key="user">
      <!-- ↓ template要素ではだめ。意味があるから。 -->
      <div v-show="user.admin !== true">
      <!-- ↑ この考え方記憶する -->
        <template v-for="(value, key, idx) in user" :key="key">
          <li>{{ idx }}: {{ key }} => {{ value }}</li>
        </template>
      </div>
    </template>
  </ul>
</template>

<style>
  .inner li { color: blue; }
  .judge li { color: green; }
</style>
```

### クリック・イベント

ディレクティブのクリックイベントを『発火させたい』要素に対してつける。

- v-on:click
- ＠click（v-on:clickのショートハンド）

`<要素 @click="独自の名称"></要素>`

クリック、インプットなりのイベントを`"独自の名称"`でディレクティブに渡して初期化して、script要素へ渡して操作する。

例としては、『ボタン』要素にクリックを担当するディレクティブに固有の名称を渡して初期化。
script要素で設定した同名の名称の関数を呼ぶ。つまり『クリックしたことを伝えて関数を発火させる』。

```html
<script setup>
  const clickBTN = () => {
    console.log('click BTN!')
  };
</script>

<template>
  <h2>クリックをVueに渡す</h2>
  <button @click="clickBTN">クリック！</button>
</template>
```

ダブルクリック
- ＠dblclick

```html
<template>
  <h2>クリックをVueに渡す</h2>
  <button @dblclick="dbClickBTN">
    ダブルクリック！
  </button>
</template>
```
  
マウスのenter, leave つまりマウスをかざす動作を渡す。
2つの動作をひとつにまとめたい。

```html
<script setup>
  const mouseEnter = () => {
    console.log('mouse over!')
  };
</script>
<template>
  <h2>マウスをかざす</h2>
  <button @mouseenter="mouseEnter">マウスをかざす</button>
</template>
```

```html
<script setup>
  const mouseLeave = () => {
    console.log('mouse leave!')
  };
</script>
<template>
  <h2>マウスが通過する</h2>
  <button @mouseleave="mouseLeave">マウスが通過する</button>
</template>
```

クリックしたタイミングで『引数』を渡すことができる。
複数のイベントの発火をハンドリングできる。

```html
<script setup>
  const clickBtnArg = (arg) => {
    console.log(arg)
  }
  const clickBtnArgAnother = (arg) => {
    console.log(arg)
  };
</script>
<template>
  <h2>引数を渡して同時発火</h2>
  <button @click="clickBtnArg('hello'), clickBtnArgAnother('こんにちは')">2つのイベントを起動させる</button>
</template>
```

eventオブジェクト『$event』を渡してbutton要素をハンドリングできる。
__テキストの内容を変えたり、クラスを変えたり、要素を追加したり。__

```html
<script setup>
  const clickOnEvent = (e) => {
    console.log(e.target)
    e.target.style.backgroundColor = 'red'
    e.target.textContent = 'hello'
    e.target.className = 'active'
    e.target.insertAdjacentHTML('afterbegin', '<span></span>')
  }
</script>

<template>
  <h2>eventオブジェクト</h2>
  <button @click="clickOnEvent($event)">イベントを渡す</button>
</template>
```

event修飾子
イベント名の後に`.修飾子`をつけることで機能を追加することができる。

ページのリロード（最初は何のことかわからなかったやつ）
例えば`form`要素の`submit`が実行されるとページのリロードが行われる。
submit のデフォルトの動作をキャンセルして意図した挙動に変更する。

```html
<script setup>
  const send = () => {
    console.log('send')
  };
</script>

<template>
  <h2>event修飾子</h2>
  <form action="" @submit="send">
    <button>送信ボタンを押す=>コンソールにsendが残らない</button>
  </form>
</template>
```

ページのリロードを防ぐためには`event`オブジェクトを利用して
`event.preventDefault`を実行する必要がある。

```html
<script setup>
  const pdSend = (e) => {
    e.preventDefault()
    console.log('preventDefaultを適用した送信')
  };
</script>

<template>
  <h2>preventDefaultを使う</h2>
  <form action="" @submit="pdSend($event)">
    <button>preventDefaultを適用した送信</button>
  </form>
</template>
```

イベント修飾子を利用することで`event`オブジェクトを利用することなく
簡単に設定を行うことができる。
ディレクティブに直接メソッドを送って解決する感じ。
`@submit`から`@submit.prevent`に変更。

```html
<script setup>
  const pdSendModifier = () => {
    console.log('pdSendModifier')
  };
</script>

<template>
  <form action="" @submit.prevent="pdSendModifier">
    <button>イベント修飾子を使う</button>
  </form>
</template>
```

## Reactivity

### Zero

- 変数`count`を0で初期化。
- `v-on`ディレクティブの`click`イベントに`count`関数を敷設。
- 表現にマスタッシュで`count`を敷設。

クリックしても何も起こらない。

count 数が増えないのは定義した count 変数が『Reactivity（反応性）』を持っていないため。

```html
<script setup>
  const count = 0;
</script>

<template>
  <h2>Reactivity Zero</h2>
  <button @click="count++">Count is {{ count }}</button>
</template>
```

### One-1

#### ref()関数の設定

- `ref()`関数を`import`
- `ref()`関数に『0』の引数を代入して変数`count`を初期化する。
  - これによって、変数`count`はReactivity（反応性）を帯びたと宣言される。
- `ref()`関数では引数には`Boolean`, `String`, `オブジェクト`を取る。

変数`count`は`Rective`化完了。ボタンをクリックするとHTMLは表現に反応するようになる。

```html
<script setup>
  import { ref } from 'vue'
  const count = ref(0);
</script>
<template>
  <h2>Reactivity One</h2>
  <button @click="count++">Count is {{ count }}</button>
</template>
```

### One-2

#### ref()関数のラッパー

`ref()`関数で初期化することで変数`count`は、オブジェクトでラップされることになる。
値を参照するには`.value`メソッドを送信する。

```html
<script setup>
  import { ref } from 'vue'
  const count = ref('object')
  console.log(count.value);
</script>
<template></template>
```

### Two

`ref()`関数で初期化された変数を関数に仕込んで使う。
状況の変化に対応する関数にするため。

```html
<script setup>
  import { ref } from 'vue'
  const count = ref(0)
  const addCount = () => {
    count.value++
  };
</script>
<template>
  <h2>Reactivity Two</h2>
  <button @click="addCount">Count is {{ count }}</button>
</template>
```

### Three-1

Reactivity（反応性）を帯びた変数を定義する。
- カウントアップの動作部はtmplate内で実行する。
- `reactive`関数の引数はオブジェクト。
- ref関数では`script`要素内で関数を定義してカウントアップさせていたが、`reactive`関数は、template要素内でディレクティブのイベントにメソッドを充てて同じ動作をする。

```html
<script setup>
  import { reactive } from 'vue'
  const state = reactive({
    count: 0
  });
</script>

<template>
  <h2>Reactivity Three-1</h2>
  <!-- 『state』変数に『count』メソッドを送信して値を得る。 -->
  <button @click="state.count++">Count is {{ state.count }}</button>
</template>
```

### Three-2-1

`ref()`関数と同じように`script`内で実行させる。
`ref()`関数で作成した`reactive`な変数のように`value`プロパティを利用する必要はない。

<script setup>
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

### Three-2-2

ref()関数とreactive()関数の違いは、ref()関数では、script要素内で関数を定義する際、インスタンスに対して`.value`メソッドが必要ということ。

```html
<script setup>
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
```