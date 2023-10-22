#### 只能通过以下方式获取 (格式固定)

```js
// 自己封装一个mixin.js的文件   使用mixin来调用方法使用即可

// #ifdef APP-PLUS-NVUE
const dom = weex.requireModule('dom')
// #endif

export default {
	methods: {
		getElStyleInfo(el) {
			// #ifdef APP-PLUS-NVUE
			return new Promise(reslove => {
				setTimeout(() => {
					const result = dom.getComponentRect(el, option => {
						reslove(option.size)
					})
				}, 100)
			})
			// #endif
		},
	}
}
```

