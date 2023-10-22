```vue

<template>
	<router-view v-slot="{ Component }">
	  <keep-alive>
	    <component :is="Component"/>
	  </keep-alive>
	</router-view>
</template>
                  
 <keep-alive :include="[]" :exclude="" :max=""></keep-alive>
// include数组中可以填入组件名称name，:include里面包含的组件才会被缓存，没有包含的不会被缓存
:exclude则相反; :max 则最大缓存的组件个数

    
```



**keep-alive生命周期的变化：**
初次进入时：OnMounted 和 onActivated
退出时：deactivated
再次进入时只会触发：onActivated
只执行一次的放在 onMounted中；组件每次进去执行的方法放在 onActivated中

https://blog.csdn.net/m0_48995032/article/details/121514798