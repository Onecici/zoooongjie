比如在js中设置
const color = ref({
	color:"black"
})

样式属性上写v-bind来实现动态修改样式
color: v-bind("color")