```tsx
// unknown类型可以接收任意数据类型   
// unknown类型一般用来定义函数形参的类型
// 使用场景 用于再次传递&输出结果&不获取属性的场景
  function aa(state: unknown): void {
    console.log(state)// unknown类型只能获取变量不能获取对象属性或者数组中某个元素（但可以直接获取整个对象或数组）
  }
	
```

