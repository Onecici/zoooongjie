```html
子组件标签上定义自定义属性名然后通过.sync赋值一个父组件data中的一个数据
<b-counter  :title.sync="yf" :count.sync="kz"></b-counter>

```

```js
子组件中通过$emit调用来快速实现修改父组件中的data数据
固定写法update:   
update: 冒号后面这里写的是子组件定义的自定义属性名
                        yfCount(nval) {
							第二个参数是修改当前.sync所绑定的父组件data中的数据
                            this.$emit("update:title", nval)
                        },

                        kzCount(nval) {
                            this.$emit("update:count", nval)
                        },

```

