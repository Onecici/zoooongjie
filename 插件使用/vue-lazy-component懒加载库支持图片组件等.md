#### 安装

```js
npm install @xunlei/vue-lazy-component


// 使用方式一
// main.js文件中全局注册使用
import VueLazyComponent from '@xunlei/vue-lazy-component'
Vue.use(VueLazyComponent)


// 使用方式二
// 在组件中实现局部注册组件
import { component as VueLazyComponent } from '@xunlei/vue-lazy-component'

export default {

  components: {
    'vue-lazy-component': VueLazyComponent
  }
}
```

#### 使用

```vue
// vue-lazy-component组件包裹下的组件,图片 等都会具有懒加载效果
// 当视口进入vue-lazy-component组件时就会加载这个组件包裹的内容出来
// 通过作用域插槽可以获取loading这个数据  该数据表示是否加载成功返回布尔值

<template>
    <div>
        <p>app页</p>
        <div class="aa"></div>
        <vue-lazy-component>
          // skeleton表示当前元素或组件属于骨架模块  scoped.loading加载成功时就会消失
          	<h1 slot="skeleton">Loadding</h1> 
            <template v-slot="scoped">
                <AsyncComponent v-if="scoped.loading" />
            </template>
        </vue-lazy-component>
    </div>
</template>

<script>
export default {
    components: {
        AsyncComponent: () => import('@/components/TestVue.vue') // 组件懒加载方式
    }
}
</script>

<style>
.aa {
  width: 100%;
  height: 1000px;
}
</style>
```

更多api参考

https://xunleif2e.github.io/vue-lazy-component/demo/dist/index.html?from=madewith.cn#/custom-transition

https://www.cnblogs.com/zxuedong/p/12825841.html


