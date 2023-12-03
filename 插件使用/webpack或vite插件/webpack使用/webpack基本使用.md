使用前npm init -y初始化package.json文件

```
安装webpack和脚手架  npm install --save-dev webpack webpack-cli
```



```javascript
// npm run build 就会运行webpack.config.js打包配置直接开始打包生成文件

// npm run dev使用前需安装webpack-dev-server
// 使用时是不会打包文件而是存放在内存中给浏览器读取 等真正需要打包时再build
// 保存文件时自动更新浏览器

// package.json
{
  "name": "webpack_demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --config ./config/webpack.dev.js --open",
        //分别配置2个不同环境的文件
        //  这样就可以区分开发环境和部署环境了
    "build": "webpack --config ./config/webpack.prod.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.7.2",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "less": "^4.1.3",
    "less-loader": "^11.1.0",
    "mini-css-extract-plugin": "^2.7.1",
    "node-sass": "^8.0.0",
    "sass-loader": "^13.2.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.0",
    "webpack-dev-server": "^4.11.1"
  }
}

// 安装对应需要的加载器和插件 
// webpack本身只能解析js文件 如需要解析其它格式就需要用到加载器
```



webpack.base.js 公共的配置

```js
const path = require('path')

// 引入插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 将js文件中的css样式导出成css文件
const HtmlWebpackPlugin = require("html-webpack-plugin");  // 自动生成html
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 打包时自动清理之前打包的文件夹

//  vue的加载器必须配置这个插件使用
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './main.js', // 打包的入口文件
    // 修改打包后的文件夹地址和入口名称
    // output:{
    //     filename: 'aaa.js',
    //     path: path.resolve(__dirname)
    // }
    module: {
        rules: [
            {
                test: /\.css$/,			// 匹配css扩展名文件
                use: [					// 配置loader加载器
                    MiniCssExtractPlugin.loader,		// 把css代码写入到网页中
                    'css-loader'		// 读取css的代码
                ]
            },
            {
                test: /\.less$/,		// 匹配less扩展名文件
                use: [
                    MiniCssExtractPlugin.loader,		// 把less代码写入到网页中
                    'css-loader',		// 读取less的代码
                    'less-loader'		// 解释编译less代码
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,	// 把scss代码写入到网页中
                    'css-loader',		// 读取scss的代码
                    'sass-loader'		// 解释编译sass代码
                ]
            },
            {
                test: /\.(png|jpg|jpeg|mp4|mp3)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images' // 配置打包后的文件夹
                        }
                    }
                ],
            },
            {// 让ttf字体样式单独生成到一个文件夹下   
                test: /\.ttf$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets' // 配置打包后的文件夹
                        }
                    }
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
              }
        ],

    },
    // 引入插件
    plugins: [
        // 插件使用2. plugins 属性当中,创建实例, 按需添加参数
        // 这个插件如果不放任何参数, 默认生成 main.css 文件
        // 如果想要修改文件名, 就可以给一个配置对象, 然后里面添加 filename 属性
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "public/index.html"	// template指定要导入的html模板
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}
```

dev环境

```js
const {merge} = require('webpack-merge'); // 引入merge 用来合并配置  如果不使用这个直接合并会导致覆盖掉base里面的配置
const base = require('./webpack.base.js');


module.exports = merge(base, { // 第一个参数是引入的配置 第二个是需要合并的配置
    mode: "development",
    devServer: {// 开发服务配置
        port: 8080 // 默认端口是8080
    },
    devtool: "source-map", // 如果不加上这个配置 代码中如有错误信息的话就浏览器里没办法判断是哪个文件报错因为是压缩过的文件  加上了之后就会知道打包前的文件中哪一个文件报错了
})
```

prod环境

```js
const base = require('./webpack.base.js');
const {merge} = require('webpack-merge');

module.exports = merge(base, {
    mode: "production"
})
```

