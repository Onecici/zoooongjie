```ts
// 在window上添加属性需要补充模块类型定义
declare global {
  interface Window {
    MyNamespace?: any
  }
}

window.MyNamespace = 123
```

