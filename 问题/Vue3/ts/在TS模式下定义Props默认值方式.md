```ts
interface Props {
  color: string
  icon: string
  name: string
  text: String
  delay?: number
  eventKey: string
}

const props = withDefaults(defineProps<Props>(), {
  delay: 1000, // 定义默认值方式
})
```

