```js
// index.js
const vueTest = {
    name: 'vueTest',
    data() {
        return {
            id: 10086,
        }
    },
    render(createElement) {
        // 创建元素createElement('dom元素名称', '设置属性')
        let canvasEle = createElement('canvas', {
                ref: 'canvas',
            })
        return canvasEle
    },
}
export default vueTest
```

