## customRef

### 作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显示控制

### 实现防抖效果

```html
<template>
  <input type="text" v-model="keyword" />
  <h3>{{keyword}}</h3>
</template>
<script>
  import { ref, customRef } from "vue";
  export default {
    name: "App",
    setup() {
      function myRef(value, delay) {
        let timer = null;
        return customRef((track, trigger) => {
          return {
            get() {
              console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`);
              track(); // 通知Vue追踪value的变化（相当于提前和get商量一下，让他认为这个value是有用的）
              return value;
            },
            set(newValue) {
              console.log(`有人把myRef这个容器中的数据改为了：${newValue}`);
              clearTimeout(timer);
              timer = setTimeout(() => {
                value = newValue;
                trigger(); // 通知Vue去重新解析模板
              }, delay);
            },
          };
        });
      }

      const keyword = myRef("hello, 500);
      return { keyword };
    },
  };
</script>
```
