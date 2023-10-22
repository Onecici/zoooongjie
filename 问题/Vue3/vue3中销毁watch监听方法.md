```js

const stopWatching = watch(
  () => data.name,
  (newVal, oldVal) => {
    console.log(Name changed from ${oldVal} to ${newVal});
  }
);

stopWatching() // 销毁监听

watch在调用时会返回一个函数再次调用即可销毁监听

需要注意的是，如果你使用watch()函数时，将监听一个非响应式数据，那么这个函数将返回一个普通的函数，而不是一个可调用的函数，因此你将无法停止监听。
```

