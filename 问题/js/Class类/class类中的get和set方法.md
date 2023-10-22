```js
  class ABC {
    _age = 68999 // 注意当设置get和set方法时 变量名前面一定要加 _ 
    get age(): number {
      return this._age
    }

    set age(val: number) {
      this._age = val
    }
  }
  const p = new ABC()
  p.age = 699999 // 当被赋值修改时ABC类中的set age被执行了
  console.log(p.age) // 获取时get被执行了
```

