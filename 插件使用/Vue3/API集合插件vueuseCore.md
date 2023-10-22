# 安装

```
npm i @vueuse/core

 他是一个集合很多各种API功能的包
```



# 判断目标元素进入可视区(实现懒加载)

```js
import { useIntersectionObserver } from '@vueuse/core'
const target = ref(null); // 获取dom元素或组件元素
const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    stop();
  }
});
/*
  1.stop 一个可执行的函数用来停止监听行为
  2.target 一个由ref api调用之后形成的RefImpl对象 也可以是一个Dom对象
  3.isIntersecting 一个类型为布尔值的数据 当被监听元素进入视口区域时为true,离开视口区域时为false
  注意: 对于目标target是否进入视口区域的监听会一直进行不会只监听一次
*/
```

# 获取当前浏览器滚动距离

```js
import { useWindowScroll } from '@vueuse/core'
const { x , y } = useWindowScroll()
// x：当前x轴移动距离
// y: 当前y轴移动距离
```

# 设置定时器实现倒计时

```js
import { useIntervalFn } from "@vueuse/core";
import { ref } from "vue";
    
const countTime = ref(0);
// pause暂停
// resume继续 && 开始
const { pause, resume } = useIntervalFn(
  () => {
    countTime.value--;
    if (countTime.value <= 0) {
      pause();
    }
  },
  1000, // 定时器时间
  { immediate: false } // 页面一进来是否执行
);

// 第一个参数是定时器执行的函数 可以自定义
```

# 全屏

```js
import { useFullscreen } from "@vueuse/core"
const {isFullscreen, toggle} = useFullscreen()
// isFullscreen是否为全屏状态 值为true或false
// toggle()全屏切换  如果是全屏状态就切换退出全屏
```



# Cookies存储

```js
// 安装
npm i @vueuse/integrations
npm i universal-cookie
```

```js
// 使用
import { useCookies } from '@vueuse/integrations/useCookies'
const cookies = useCookies() // 调用之后返回一个对象里面有get set之类的方法
```



## whenever监听器

```js

import { whenever } from "@vueuse/core"


const count = ref(-1)

// whenever也是监听器只不过是通过传入的第一个参数的布尔值来决定是否执行第二个函数
whenever(
  () => count.value % 5 === 0,
  () => {
    console.log("is true")
  }
)
```



### createSharedComposable(实例化一次)单例模式

```js
import { createSharedComposable } from '@vueuse/core'

class newClassJs {
    执行代码....
}

export const newClassJs = createSharedComposable(() => new ClassJs)
```



### useMouse获取鼠标或触摸时的坐标

```js
import { useMouse } from "@vueuse/core"

const { x, y } = useMouse()
```





