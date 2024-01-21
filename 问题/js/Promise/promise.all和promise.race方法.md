```js
    const promises = [
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Promise 1');
            }, 1000);
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Promise 2');
            }, 2000);
        }),
    ];

    // Promise.all是等待上一个请求结束后才执行下一个请求的
    Promise.all(promises).then((values) => {
        console.log(values); // 返回promises数组中所有成功的Promise实例  如果其中有一个失败那么整个all都会出错
    });

    Promise.race(promises).then((values) => {
        console.log(values); // 返回promises数组中最先成功的Promise实例
    });
```

