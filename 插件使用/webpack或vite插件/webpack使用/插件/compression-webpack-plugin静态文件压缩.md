```
npm install compression-webpack-plugin -D
```

```js
		plugins: [
			new compressionWebpackPlugin({
				algorithm: 'gzip', // 压缩算法 
				test: /\.(js|css|svg)$/, // 指定压缩文件类型
				threshold: 10240, // 只压缩大于10kb
				minRatio: 0.8, // 压缩后的文件大小与原始文件大小的比例大于等于0.8时才会保留压缩后的文件
				deleteOriginalAssets: false // 是否删除原文件
			}),
		]
```

