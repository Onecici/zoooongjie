### Pinia自定义插件(Pinia.use)--------实现数据持久化存储示例

##### test.js

```js

export default (currentStoreInstance) => {
    // 1-2 每次调用该函数时currentStoreInstance获取到的是对应仓库的实例
    
    const storeID = currentStoreInstance.store.$id // 获取仓库中的id名称
    
    // 数据持久化------Start
    const GET_DATA = JSON.parse(sessionStorage.getItem(storeID)) || {}
    // GET_DATA: Object
    currentStoreInstance.store.$patch(GET_DATA) // $patch方法可以给当前仓库实例整个state对象数据覆盖掉
    
    currentStoreInstance.store.$subscribe((store, state) => { 
        // $subscribe用来监听仓库状态数据变化 数据发生改变就执行该函数
        console.log(state);
        sessionStorage.setItem(storeID, JSON.stringify(state))
    })
    // 数据持久化------End

    // currentStoreInstance.options可以获取当前仓库对象defineStore中的自定义属性
    if (currentStoreInstance.options.myTest) {
        console.log(currentStoreInstance.options.myTest());
    }
}
```



##### mian.js

```js
import test from './stores/plugins/test.js'

const pinia = createPinia()

// 1-1 如果在Pinia中使用 defineStore 创建了5个仓库，那么在调用 pinia.use(test) 时， test.js插件 会被调用5次
pinia.use(test)
```

