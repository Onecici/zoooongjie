```
官网http://mockjs.com/
npm install mockjs
```

![Snipaste_2022-12-17_12-30-45](E:\前端\插件使用\img\Snipaste_2022-12-17_12-30-45.png)

```
引入包 然后进行配置
Mock.mock(a,b,c)
a是模拟请求接口
b是请求方式
c是请求后返回的数据  这里如果不用mockApi下的方法的话可以不用调用Mock.mock() data|1-5 表示里面的数据随机生成1-5个
```

最后将当前Mock导出引入到main.js下