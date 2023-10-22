### NVUE中所有标签全局都采用flex布局模式

#### 并且默认排列方式为flex-direction: column;所以需要转换横轴排列改成row进行反转即可

```html
比如<view></view>标签样式默认开启flex 

```

每个盒子默认宽高都没有撑满效果  子元素需要使用flex:1来撑满父盒子
