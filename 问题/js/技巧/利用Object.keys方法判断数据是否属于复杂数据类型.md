```js
// Object.keys方法可以将一个对象中的所有key值转换成数组  也可以将数组所有的下标转成数组




// 1.如果传入的是简单数据类型时
Object.keys(1) // 输出为空数组
Object.keys('afafsa') // 输出为空数组


// 如果传入的是复杂数据类型时 输出就有长度
Object.keys(params).length > 0   // 所以用此方法可以进行判断是否属于复杂数据类型
```

