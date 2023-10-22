```vue
<template>
    <div id="app">
        app页
        <AsyncComponent v-if="isShow" />
        <button @click="handelShowCop">点击加载组件</button>
    </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        handelShowCop() {
            // 实现按需加载组件
            import('@/components/TestVue.vue').then(res => {
              // this.$options.components可以获取到当前vue页面所注册的组件 
              // this.$options.components.AsyncComponent这个可以用来注册组件  通过res.default来获取组件数据
                this.$options.components.AsyncComponent = res.default
                this.isShow = true
            })
        }
    }
}
</script>

```

