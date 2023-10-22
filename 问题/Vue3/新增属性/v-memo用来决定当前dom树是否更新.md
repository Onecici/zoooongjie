v-memo的值必须是数组包裹的   

v-memo="[count]" 表示count数据变化的时候允许更新当前dom树
v-memo="[count === index]" 表达式写法 表示count数据等于index时允许更新当前dom树


如果v-for数据比较多的时候可以搭配 表达式写法 一起使用