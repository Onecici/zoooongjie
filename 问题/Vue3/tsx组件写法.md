```tsx
// h.tsx 组件

import { defineComponent, ref, toRefs, type PropType } from 'vue'

interface msgObj {
  title: string
}

const Child = defineComponent({
  setup(props, { slots }) {
    return () => (
      //<></>类似template 不会渲染真实dom
      // 2.2 插槽使用方式
      <>
        默认插槽: {slots.default?.()}
        <br />
        具名插槽: {slots.loading?.()}
        <br />
        作用域插槽: {slots.suffix?.()}
      </>
    )
  }
})

export default defineComponent({
  // 1.3 接收传递过来的props参数
  props: {
    msgObj: {
      // Object as PropType<msgObj> 该写法是TS的固定方式 是用来专门定义props参数中对象的具体类型
      type: Object as PropType<msgObj>,
      required: true
    }
  },
  emits: ['zdy'],
  setup(props, { emit }) {
    // 1.4 使用props参数
    const { msgObj } = toRefs(props)
    const list = ref([1, 2, 3])

    return () => (
      <>
        <Child
          // 2.1 插槽使用方式
          v-slots={{
            suffix: () => '作用域3333',
            loading: () => 'Loading具名插槽'
          }}
        >
          {/* 在tsx模版中使用ref响应数据需要.value进行使用 */}
          默认插槽{msgObj.value.title}
        </Child>
        {list.value.map((item) => {
          return (
            <button
              // 1.1 普通事件
              onClick={() => {
                emit('zdy', item)
                console.log(`onClick----${item}`)
              }}
              // 1.2 带事件修饰符事件
              // @ts-ignore 使用onClickOnce事件修饰符时会导致ts类型报错 所以这里只需要使用ts-ignore忽略这个报错
              onClickOnce={() => {
                console.log(`onClickOnce----${item}`)
              }}
            >
              click {item}
            </button>
          )
        })}
      </>
    )
  }
})

```

#### 使用

```vue
<template>
  <div class="main">
    <h :msgObj="msgObj" @zdy="zdyFn"></h>
  </div>
</template>

<script setup lang="ts">
	const msgObj = reactive({
  	title: 'Message title'
	})
  
  const zdyFn = (data: number) => {
  	console.log(data)
	}
</script>
```

