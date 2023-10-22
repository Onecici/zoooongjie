### 安装

```
npm i @craco/craco    用于配置webpack
```

### 修改package.json文件

```js
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
    "eject": "react-scripts eject",
      
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
```

### 配置craco.config.js文件

```js
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve("src"),
      'components': resolve("src/components"),
    },
  },
  devServer: {
    port: 3001
  }
  
    // 其它配置...
}
```