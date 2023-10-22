#### 命令行方式

```js
// 安装
npm i -g purgecss


purgecss --css ./app.css --css ./app2.css  --content ./index.html "src/**/*.js" --output ./build


注意输出的目录必须存在否则报错
```

更多使用方式（如webpack中使用）

https://www.purgecss.cn/