```js
npm i vuex-persistedstate
```

```js
import { createStore } from 'vuex'
// 引入vuex持久化方法createPersistedState
import createPersistedState from 'vuex-persistedstate'

import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'
 
export default createStore({
  state: {
    user:{},
    cart:{}
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    // store模块
    user,
    cart,
    category
  },
  plugins: [
    // vuex持久化配置
    createPersistedState({
      key: 'rabbitstore-client',
      paths: ['user', 'cart'],
			storage: { // 重新定义存储方式   默认是存储在localStorage中
        // 以下配置需传入一个函数 形参中拿取该插件传来的参数然后配置到uni的数据存储api中
        // 当前插件将会把数据存入uni数据缓存当中
				getItem: (key) => uni.getStorageSync(key), // 获取  
				setItem: (key, value) => uni.setStorageSync(key, value),// 存储  
				removeItem: (key) => uni.removeStorageSync(key) // 删除  
      }
    })
  ]
})
```



===> key是存储数据的键名

===> paths是存储state中的那些数据，如果是模块下具体的数据需要加上模块名称，如`user.token`

===> 修改state后触发才可以看到本地存储数据的的变化。

