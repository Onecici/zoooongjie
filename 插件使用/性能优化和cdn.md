# 第一步

vue-cli本身提供的性能分析工具

```
npm run preview -- --report
```

运行后可以通过网页查看分析里面那种包的大小比较大

有些包用的不是很多可以按需加载就行了

用的多且包又大的话可以使用cdn进行加载

## CDN加载

通过cdn加载可以不用我们自己的服务器去加载这些包 利用别人的服务器加载来

**使用方式**

首先去到vue.config.js文件中module.exports配置里找到configureWebpack对象里设置externals属性



```javascript
// 这里表示webpack打包时排除的包  里面的key值是包名  value是当前在vueCli文件里引入的名称
externals = {
    'vue': 'Vue',
    'element-ui': 'ElementUI',
    'xlsx': 'XLSX'
 }
```

```
// 创建一个cdn变量用来方便管理cdn地址
let cdn = {
    css: [
      'https://unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css' 
    ],
    js: [
      'https://unpkg.com/vue@2.6.10/dist/vue.js', 
      'https://unpkg.com/element-ui@2.13.2/lib/index.js', 
      'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/jszip.min.js',
      'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'
    ]
  }
```

然后再找到chainWebpack函数在函数中写

```js
config.plugin('html').tap(args => {
  args[0].cdn = cdn
  return args
})
```

找到 `public/index.html`。通过你配置的CDN  循环注入 css 和 js。

```vue
<head>
  <!-- 引入样式 -->
  <% for(var css of htmlWebpackPlugin.options.cdn.css) { %>
    <link rel="stylesheet" href="<%=css%>">
  <% } %>
</head>

<!-- 引入JS -->
<% for(var js of htmlWebpackPlugin.options.cdn.js) { %>
  <script src="<%=js%>"></script>
<% } %>
```

### 判断让上面写的代码都只能在build生产环境中有效

```js
// cdn变量 因为public/index.html中每次执行都会循环注入数据 所以要在里面放着占位 循环数据undfined没事
let cdn = { css: [], js: [] } 
let externals = {}
if (process.env.NODE_ENV === 'production') { // 通过NODE_ENV可以获取到当前环境名称
  cdn = {
    css: [
      'https://unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css'
    ],
    js: [
      'https://unpkg.com/vue@2.6.10/dist/vue.js',
      'https://unpkg.com/element-ui@2.13.2/lib/index.js',
      'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/jszip.min.js',
      'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'
    ]
  }
  externals = {
    'vue': 'Vue',
    'element-ui': 'ElementUI',
    'xlsx': 'XLSX'
  }
}
```

