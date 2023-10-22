```ts
interface IProps {
  intervalTime?: number;
  transitionTime?: number;
  height?: number;
  data: IScrollBarInfo[];
}

// withDefaults方法的第二个参数中定义默认值
const props = withDefaults(defineProps<IProps>(), {
  intervalTime: 3000,
  transitionTime: 1000,
  height: 40,
});
```

