```
npm install html-webpack-plugin -D
```

```js
通用配置
		plugins: [
			new HtmlWebpackPlugin({
                template: "指定html模板路径如./src/index.html",
                minify: {
                    collapseWhitespace: true,
                    keepClosingSlash: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true,
                    minifyJS: true,
                    minifyCSS: true,
                },
            })
		]
```

