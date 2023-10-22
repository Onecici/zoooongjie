```
npm i vue-lazyload -S
```

```js
// vue2引入方式
import lazyLoad from 'vue-lazyload' 
Vue.use(lazyLoad);　　
```

### 使用

```html
<img v-lazy="require('../assets/3016328129_14.jpg')" /> // 引入本地图片
<img v-lazy="https://img0.baidu.com/it/u=1652816518,3273566625&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500" /> // 使用外部链接


当元素进入可视区域时就会加载
```







具体使用参考https://www.cnblogs.com/ElemSN/p/13494926.html