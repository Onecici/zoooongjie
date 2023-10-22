```js
// 使用方法
let n = 0

const callback = () => {
  // 1秒60帧 所以当前函数1秒执行60次
  console.log(++n)
  requestAnimationFrame(callback)
}
const fpsTime = requestAnimationFrame(callback)


cancelAnimationFrame(fpsTime) // 取消定时器
```

