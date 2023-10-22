#### 示例一

```js
const fn = () => {
    ...运行代码
}
abc(fn)

function abc(callback) {
	...运行代码
	callback()
}
```

#### 示例二

```js
let fn = null

cba()
abc()
function abc() {
	...运行代码
	fn()
}

function cba() {
    fn = fn = () => {
    ...运行代码
	}
}
```

