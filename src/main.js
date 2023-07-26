// vue から createApp関数をimort
// その関数でVue.js のインスタンスの作成
import { createApp } from 'vue'
import './style.css'
// このファイルが司令塔。App.vueを編集していく。
import App from './App.vue'
// ここでHTMLと繋いでいる。
createApp(App).mount('#app')
