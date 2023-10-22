```js
npm install @better-scroll/core --save

import BScroll from '@better-scroll/core'
let bs = new BScroll(wrapper, {})
wrapper可以是dom元素也可是元素选择器 class id这些   第二个参数是配置项

```

# 无限滚动插件（请求的数据很多的时候可以用)

```js
npm install @better-scroll/infinity --save

import BScroll from '@better-scroll/core'
import InfinityScroll from '@better-scroll/infinity'

BScroll.use(InfinityScroll)

let bs = new BScroll(wrapper, {
  scrollY: true,
  infinity: {
    fetch(count) {
      // count是最大允许渲染的数量
      // 这里必须return一个Promise对象
      // resolve()里面是个可以是个数组
      // 当数据没有了可以resolve(false)来停止无限滚动
    }
    render(item) {
		// item是fetch中return返回的数组中的每一项
    	// 这里必须return返回一个Dom元素来渲染在列表中
    },
    createTombstone() {
      // 必须return返回一个骨架 DOM 节点。 请求数据会有延迟优先渲染骨架
    }
  }
}))
```