toRefs它将响应式对象转换为普通对象并将其所有属性转换为ref对象。这意味着toRefs函数返回一个包含ref对象的普通对象

```ts
// 示例1
const props = defineProps<{
  item: string | number[];
}>();

// toRefs函数返回一个包含ref对象的普通对象  从普通对象进行解构拿到的item是ref响应对象
const { item } = toRefs(props);


// 示例2
import { reactive, toRefs } from 'vue'

const state = reactive({
  username: "John",
  age: 30,
});

const { username } = toRefs(state);

// 即使经过toRefs处理之后数据也是具有响应式的
state.username = "acasasa";
console.log(username.value);



refs.username.value = 'Jane'
console.log(state.username) // 'Jane'
console.log(refs.username.value) // 'Jane'
```

