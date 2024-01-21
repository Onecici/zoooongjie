```js
function ada() {
    a()
}

function a() {
    throw new Error('错误')
}

// 异常捕获
try{ 
	 ada()
} catch(err) {
	获取报错信息
} finally {
	无论如何在最后都会执行的代码
}
```

##### 不能捕获的错误

```js
在异步操作的回调函数中抛出的错误
例如 setTimeout、fetch、Promise 这些异步函数中抛出 
        try {
            setTimeout(() => {
                throw new Error("这个错误不会被 try...catch 捕获");
            }, 1000);
        } catch (e) {
            console.log(e);
        }
```

