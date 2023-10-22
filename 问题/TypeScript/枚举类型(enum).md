```ts
// 普通枚举类型中的值如果不赋值的话会默认自动从0开始依次分配默认值(类似数组下标)
// 普通枚举在脚手架编译时会生成一个对象
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// 常量枚举
// 1.常量枚举在脚手架编译完后会被删除掉
// 2.常量枚举在脚手架编译时会将所有通过constDirection.读取这里面的属性都会在编译时转换成当前这个常量枚举中所定义的数据内容
const enum constDirection {
  Up,
  Down = 44,
  Left,
  Right
}


    // 枚举类型
    console.log(Direction)
    // 常量枚举
    // console.log(constDirection)  // 因为在编译完后常量枚举会被删除,所以这种方式无法直接读取
    console.log(constDirection.Down) // 编译时会转换成常量枚举中定义的数据


// 普通枚举和常量枚举区别
// 常量枚举可以带来一些性能和优化 因为常量枚举在编译完后会删除
// 常量枚举只能包含常量值（即直接量 如string,number这些,而普通枚举可以包含任何类型的值 !!!
```

