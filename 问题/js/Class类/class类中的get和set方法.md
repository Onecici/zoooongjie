```js
class ABC {
    age = 68999
    get age() {
        return this.age
    
    set age(val) {
        this.age = val
    }
}
const p = new ABC()
p.age = 699999 // 当被赋值修改时ABC类中的set age被执行了
console.log(p.age) // 获取时get被执行了
```

