```js
import { ref, unref } from 'vue';

const count = ref(0);

document.getElementById('myElement').style.width = unref(count) + 'px';

// unref使用场景：在不需要使用响应式数据的情况下使用
```

