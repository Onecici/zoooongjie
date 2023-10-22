```js
        const arr = [1]
        Array.prototype.push.apply(arr, [4, 5, 6]) // apply会自动将第二个参数进行剩余运算传入到当前改变this指向的函数的形参上
        console.log(arr); // [1,4,5,6]   相当于arr.push(4,5,6)  可以push多个
```

