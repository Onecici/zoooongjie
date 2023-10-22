get请求

```
req.query获取传入的参数
```



post请求

```js
req.body获取传入的参数

需要给Express添加中间件才能使用req.body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
```

