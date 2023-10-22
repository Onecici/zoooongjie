```js
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

// 设置静态资源
app.use(express.static(__dirname))

// 使用代理
app.use(
  '/api.php',
  createProxyMiddleware({
    target: 'http://sys.gz2test.com',
    // pathRewrite: {
    //   '^/api': '', // 重写路径
    // },
    changeOrigin: true,
  })
)


app.use(
  '/video',
  createProxyMiddleware({
    target: 'https://sys-source.oss-cn-hongkong.aliyuncs.com',
    pathRewrite: {
      '^/video': '', // 重写路径
    },
    changeOrigin: true,
  })
)


app.listen(3000, () => {
  console.log('本地服务器启动成功');
})
```