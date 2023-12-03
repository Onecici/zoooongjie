```
npm install terser-webpack-plugin -D
```

```js
		optimization: {
			minimizer: [
				new TerserPlugin({
					terserOptions: {
					compress: {
						drop_console: true
					},
					},
				}),
			],
		},
```

