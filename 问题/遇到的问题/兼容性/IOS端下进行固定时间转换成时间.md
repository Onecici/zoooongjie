```js
// IOS端下进行固定时间转换成时间戳会出现NaN

  getTimestamp(time) {
    // time 参数值为 2021-08-19 00:00:00
    
    let replaceTime = time.replace(/-/g,'/') // 对当前参数添加这个方法即可
    return (new Date(replaceTime)).getTime() / 1000;
  }

export default getTimestamp;
```

