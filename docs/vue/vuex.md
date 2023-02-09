# vuex

## 1. 理解 vuex

### 1.1 vuex 是什么

1、概念：专门在 vue 中实现集中式状态（数据）管理的一个 vue 插件（Vue.use(...)），对 vue 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，并且适合任意组件间的通信。

#### 数据共享的实现方式：

全局事件总线实现：
![数据共享-全局事件总线](/img/数据共享-全局事件总线.png "数据共享-全局事件总线")
vuex：
![数据共享-vuex实现](/img/数据共享-vuex实现.png "数据共享-vuex实现")

2、Github 地址：https://github.com/vuejs/vuex

## 2. 什么时候使用 Vuex

1、多个组件依赖同一状态

2、来自不同组件的行为变更同一个状态

## 3. Vuex 的工作原理

![vuex实现原理分析](/img/vuex实现原理分析.png "vuex实现原理分析")

## 4. 搭建 vuex 环境

1、创建文件：src/store/index.js

```js
// 引入Vue核心库
import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 应用Vuex插件
Vue.use(Vuex);

// 准备actions对象：响应组件中用户的动作
const actions = {};
// 准备mutations对象：修改state中的数据
const mutations = {};
// 准备state对象：保存具体的数据
const state = {};

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
```

2、在 main.js 中创建 vm 的时候传入 store 配置项

```js
// 引入store
import store from "./store";

// 创建vm
new Vue({
  el: "#app",
  render: h => h(App),
  store,
});
```

## 5. 基本使用

1、初始化数据，配置`actions`、配置`mutations`、操作文件`store.js`

```js
// 引入Vue核心库
import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 引用Vuex
Vue.use(Vuex);

const actions = {
  // 相应组件中加的动作
  jia(context, value) {
    context.commit("JIA", value);
  },
};

const mutations = {
  // 执行加
  JIA(state, value) {
    state.sum += value;
  },
};

// 初始化数据
const state = {
  sum: 0,
};

// 创建并暴露store

export default new Vuex.Store({
  actions,
  mutations,
  state,
});
```

2、组件中读取 vuex 中的数据：`$store.state.sum`

3、组件中修改 vuex 中的数据：`$store.dispatch('actions中的方法名',数据)`或`$store.commit('mutations中的方法名',数据)`

_备注：若没有网络请求或者其他业务逻辑，组件中也可以越过 actions，即不写`dispatch`,直接写`commit`_
