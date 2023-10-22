```js
function func() {
    // 利用throw抛出错误 
    throw () => {
        console.log('123456');
    }
}




try {
    func()
} catch(err) {
    // 这里err拿到的是函数
    err()
}
```

