```js
// target：需要更改的data数据 或 响应式数据的引用
// key：对象中的属性或者数组下标
// val：添加的值
this.$set(target、key、val)

// this.$set方法在data响应式数据中添加或修改一个响应式数据 
// 因为vue无法监听到新添加的属性 
// 示例：
export default {
    data() {
        return {
            obj: {
                name: "Klsa"
            }
        }
    }
}
this.obj.age = 5 // 当前新增了一个age属性 只有在obj对象中有age属性才具有响应式

// 使用
this.$set(this.obj、age、5)


// this.$set可以对data中的响应式数据的引用进行添加响应式数据
// element的示例：
<div slot-scope="{row}">
	// 这个row是从data中响应式数据获取的某个对象的引用 可以直接使用this.$set(row, 'children', list)来添加响应式数据
</div>
```

