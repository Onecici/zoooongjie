```js
babel解析器可以让低版本浏览器兼容最新的js新特性 如一些低版本浏览器不支持ES6以上的会转成ES5

// 1. 安装babel需要的依赖
npm i babel-loader @babel/core @babel/preset-env -D 
// 2. webpack.config.js
{
	test: /\.js|\.jsx$/,
	use: "babel-loader",
	exclude: /node_modules/, 
}


```

```json
// 3. 项目根目录创建babel.config.json  复制粘贴即可

{
    "presets": [
        [
            "@babel/preset-env",
            {
              	// 指定最低版本浏览器的语法兼容
                "targets": { 
                    "ie":"11",
                    "browsers": [
                        "> 1%",
                        "last 2 versions"
                    ]
                },
              	// babel-loader只会将 ES6/7/8语法转换为ES5语法，但是对新api并不会转换
              	// babel-polyfill可以将新api进行转换 以下方式进行配置即可
                "useBuiltIns": "usage",
                "corejs": 3 // 需要npm install core-js
            }
        ]
    ]
}

打包时 Babel 会根据配置文件中指定的目标浏览器和其版本范围，对代码进行转译，以满足项目的兼容性需求。这样，最终生成的代码将包含向后兼容的 JavaScript 代码
```

