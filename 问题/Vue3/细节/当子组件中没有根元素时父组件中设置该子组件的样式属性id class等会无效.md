```vue
// 父组件

<template>
	// 子组件设置id无效 因为子组件中没有根元素
	// 因为子组件没有根元素所以被渲染成Fragment根节点
  <home id="haoos" />
</template>


```

```vue
// 子组件
<template>
    <div class="music"></div>
    <div>1</div>
</template>
```

