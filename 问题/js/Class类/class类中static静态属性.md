```js
  class A {
    nume = 123
    static count = 1
    constructor() {
      console.log(A.count) // 类中获取自己的静态属性只能通过这种方式  不能使用this
    }
  }
  console.log(A.count) // 无需new创建类即可获取静态属性
```

