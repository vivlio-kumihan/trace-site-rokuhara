# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


HelloWorld.vue ファイルのように vue の拡張子のついたファイルをシングルファイルコンポーネント(SFC)ファイルと言います。Vue.js では createApp で指定されていた App コンポーネントをルートコンポーネントとして他のコンポーネントを import することでアプリケーションを構築していきます。App コンポーネントにすべての処理を記述することも可能ですがコードが肥大化していくとメンテナンスも大変になります。コンポーネントを機能・役割毎に分割していくことでコンポーネントが再利用できるようになり、コードの保守も楽になります。