使用教程https://blog.csdn.net/qq_44552416/article/details/125800645



遇到问题

```js
const quill = this.$refs.myQuillEditor.quill // 获取quill元素

quill.keyboard.bindings['13'] = []

quill.keyboard.addBinding({ key: 13 }, () => {\
  console.log('触发enter键')
})

// 如果要给quill-editor添加键盘事件 但是如果这个quill-editor有默认的键盘事件需要将quill.keyboard.bindings里默认自带的事件清空才能将自己添加的事件成功执行 不然无法优先执行
```

