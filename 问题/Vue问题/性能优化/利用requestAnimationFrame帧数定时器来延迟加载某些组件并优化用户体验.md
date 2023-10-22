```vue
<template>
  <div>
    <h2>I'm an heavy page</h2>
			// 1-2. defer(2)函数的返回值保持响应式 所以该v-if判断会根据响应式数据的结果而改变
    <template v-if="defer(2)">
      <Heavy v-for="n in 10" :key="n"/>
    </template>

    <Heavy v-if="defer(3)" class="super-heavy" :n="9999999"/>
  </div>
</template>
<script>
import Defer from '@/mixins/Defer'
export default {
  mixins: [
    Defer()
  ]
}
</script>

// 1-3. 👇👇👇👇👇👇👇
// v-if="defer(2)"和v-if="defer(3)"
// 这样写的好处就是
// 1.可以按顺序加载显示出来优化用户体验
// 2.提高初始加载速度只渲染页面中最重要的部分，而延迟加载其他部分，可以更快地展示给用户页面的核心内容
// 3.可以减少网络请求 因为组件是v-if延迟加载的组件，所以页面只会在首次渲染时加载必要的内容，而非一次性加载整个页面的全部组件和数据
```

```js
//混合mixin
export default function (count = 10) {
  return {
    data () {
      return {
        displayPriority: 0
      }
    },
    mounted () {
      this.runDisplayPriority()
    },
    methods: {
      runDisplayPriority () {
        const step = () => {
            // 2-1.requestAnimationFrame帧数定时器需要配合递归调用的形式才能实现
          requestAnimationFrame(() => {
            this.displayPriority++
            if (this.displayPriority < count) { // 设置count就是定时器阈值否则就造成无限循环了
              step()  // 2-2.因为使用了requestAnimationFrame每次循环调用时都是一帧一帧的调用
            }
          })
        }
        step()
      },
      defer (priority) {
        return this.displayPriority >= priority // 1-1.当函数返回一个对响应式数据时它会保持响应式
      }
    }
  }
}
```

