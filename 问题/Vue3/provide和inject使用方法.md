## Vue3写法

#### 父组件

```js
import { provide, reactive } from "vue";

const obj = reactive({
  name: "Lini",
  age: 18,
});

provide("name", obj); //第一个参数是自定义名称 第二个参数是数据
```

##### 子组件

```js
import { inject } from "vue";

const obj = inject("name"); 
// 第一个参数是provide的自定义名称 需要用一个变量来接收返回的数据才能使用
```

