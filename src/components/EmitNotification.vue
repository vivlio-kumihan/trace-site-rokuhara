<!-- ## 【子から親へのイベントによる通知】 -->
<!-- 
props では常に親コンポーネントから子コンポーネントに対してデータを渡す。
props として渡されたデータは子コンポーネントでは直接更新してはいけないというルートがある。
そのため親コンポーネントが持つ reactive な変数は親コンポーネントで更新しなければならない。

### 子コンポーネントで行うユーザのアクションによって親の reactive な変数を更新する場合

子コンポーネントから親コンポーネントに対して、props で受け取った reactive な変数を
更新して欲しいと伝えるための通知の仕組みとして emit が用意されている。

### emitの利用
- emit ではイベントを利用し子コンポーネントから親コンポーネントに通知を行う。
- emit はイベントと一緒に親コンポーネントにデータを渡すことも可能。
- props が親から子へとデータを渡すのに利用されるのとは逆で emit は子から親へデータを渡す際に利用される。
- emit を利用して親から子へデータを渡したり通知に使うことはできない。
-->

<!-- ### $emit によるイベント発生と検知 -->
<!-- 
#### 子コンポーネントから親コンポーネントへの通知の設定方法
- 子コンポーネントの template タグの中から親コンポーネントに通知を行いたい場合は $emit の引数に任意の名前のイベント名を設定して実行するだけ。
- ユーザが行うアクションに対して $emit 関数を実行させるためボタンに click イベントを設定する。
- ボタンをクリックすると $emit の引数に設定した notification というイベントが発生する。
- notification はイベント名で任意の名前をつけることが可能。
- 発生したイベントを親コンポーネントで検知する際に利用するのでわかりやすい名前をつける。 
-->
<!-- 
JavaScript、Vue に限らずイベントが発生した場合そのイベントを検知するための設定が必要となり、
子コンポーネント EmitNTF で発生したイベントは親コンポーネント App で検知する必要があります。
『イベントの検知』は親コンポーネントで設置した『子コンポーネントの要素の中』で行う。
具体的には、イベントの検知には 『v-on ディレクティブ』を利用し v-on: の後に『$emit 関数の
引数に設定した名前』を設定する（ここでは『notification』）。
イベントを検知した後に実行する関数を handleEvent で設定し script タグの中に
handleEvent 関数の処理を記述してHTML（この場合は、コンソール）へ出力するという流れ。
-->
<!-- 
<script setup></script>

<template>
  <div>
    <h2>子コンポーネント</h2>
    <button @click="$emit('notification')">通知</button>
  </div>
</template>
-->

<!-- 
警告される
div 要素を外し『ルート要素が複数』になった場合は警告が出る。
-->
<!-- 
<script setup></script>

<template>
  <h2>子コンポーネント</h2>
  <button @click="$emit('notification')">通知</button>
</template>
-->

<!-- 
解除
defineEmits 関数でイベントを定義して解消する。
イベントを定義しておくとは、button要素に定義しているクリックイベント
『notification』を引数に入れるとルートが複数になっても警告が出なくなるということ。
-->
<!-- 
<script setup>
defineEmits(['notification'])
</script>

<template>
  <h2>子コンポーネント</h2>
  <button @click="$emit('notification')">通知</button>
</template>
-->

<!-- 
戻り値の利用  
defineEmits 関数には戻り値を保存することができる。
戻り値を emit に保存した場合は emit 関数として利用可能。
その場合は $emit を利用せず emit('notification')を利用することができる。
ただし、script タグで定義した emit と同じ名前に設定する必要がある。
-->
<!-- 
<script setup>
  const emit = defineEmits(['notification']);
</script>

<template>
  <h2>子コンポーネント</h2>
  <button @click="emit('notification')">通知</button>
</template>
-->
<!-- 
### defineEmits を利用して複数のイベント対応
Hello コンポーネントから notification イベントを発生する際に
template タグの中では $emit 関数を利用してたが
script タグの中の関数を利用してイベントを発生する際には
defineEmits 関数を利用する。
defineEmits 関数の引数では配列でイベント名の設定を行う。
実行する際には defineEmits の戻り値の関数 emit に引数のイベント名を
設定して実行する。
-->
<!-- 
<script setup>
  const emit = defineEmits(['notification', 'click'])
  const sendNotification = () => {
    emit('notification')
  }
  const sendClick = () => {
    emit('click')
  };
</script>

<template>
  <h2>子コンポーネント</h2>
  <button @click="sendNotification">通知</button>
  <button @click="sendClick">クリック</button>
</template> 
-->

<!-- 【emit イベントを利用した更新】 -->
<!-- 
emit によって発生したイベントの通知を利用して、
親コンポーネントで定義した reactive な変数の更新方法を確認する。
- App.vue ファイルの中で ref 関数を利用して reactive な変数 name を定義する。
- props を使って EmitNotification コンポーネントに name を渡す。
- 子コンポーネント EmitNotification でこの後に定義を行う changeNameEvent イベントを検知して handleEvent 関数を実行し name の値を"Linda"にする。 
-->

<script setup>
  const props = defineProps({
    name: String
  })

  const emit = defineEmits(['changeNameEvent'])

  // Hello コンポーネントではボタンをクリックすると changeName 関数を実行し、
  // changeName 関数の中では changeNameEvent イベントを発生させる。
  const changeName = () => {
    emit('changeNameEvent')
  };
</script>

<!-- 
  "Change Name"ボタンをクリックすると changeNameEvent が発生して
  親コンポーネントで changeNameEvent イベントを検知して handleEvent 関数を実行し、
  reactive な変数である name の値を"John"から"Ken"に更新する。 
-->
<template>
  <h2>子コンポーネント</h2>
  <p>Hello {{ props.name }}</p>
  <button @click="changeName">Change Name</button>
  
</template>
<style></style>