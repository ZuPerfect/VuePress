# el与data的两种写法
``` html
<div id="root">
    <h1>Hello,vue{{name}}</h1>
</div>
```
``` js
// 创建Vue实例
const vm = new Vue({
    // el: '#root', // el的第一种写法
    // data的第一种写法：对象式
    // data: {
    //     name: 'JavaScript'
    // }

    // data的第二种写法：函数式(这个地方不推荐使用箭头函数，因为箭头函数this的指向就不是vue对象了，而是window，会出问题)
    data(){
        return {
            name:'javascript'
        }
    }
})

vm.$mount('#root') // el的第二种写法，相对灵活一些
```