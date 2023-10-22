```vue
<template>
    <div>
        <AsyncComponent v-if="isShow" />
        <button @click="isShow = true">点击加载组件</button>
    </div>
</template>

<script>
export default {
    components: {
      // () => import('@/components/TestVue.vue')
      // 这种属于懒加载方式  当组件加载时webpack将会加载当前组件  第一次不会加载只有执行渲染时才会
        AsyncComponent: () => import('@/components/TestVue.vue')
    },
    data() {
      return {
        isShow: false
      }
    }
}
</script>

<style>
</style>
```

