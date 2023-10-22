# `Pinia` 持久化存储插件

**安装**

```
npm i pinia-plugin-persistedstate
```

**使用**

```js
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

app.use(pinia);
```

**模块开启持久化  简单用法**

```js
const useHomeStore = defineStore({  
  id: "home",
  persist: true 		// 在某个Store模块中使用就会让当前模块里的全部数据进行持久化  第一次加载的时候会先存到本地存储localStorage
});

// 当模块中的数据发送变化的时候就会存储一次数据
```



#### 模块持久化某个数据

```js
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'main',
  state: () => {
    return {
      someState: 'hello pinia',
      nested: {
        data: 'nested pinia',
        num: 123
      },
    }
  },
  persist: {
    // 修改存储中使用的键名称，默认值为当前模块中的 id
    key: 'main',
    // 修改为 sessionStorage，默认值为 localStorage
    storage: window.sessionStorage,
    // 设置当前模块需要持久化的数据
    paths: ['someState','nested.data'],
  },
})
```

## 存储到Cookie

```js
persist: {
    key: 'home',
    storage: {
      getItem: (key: string) => {
        return Cookies.get(key)
      },
      setItem: (key: string, value: string) => {
        Cookies.set(key, value)
      },
    },
    paths: ['categoryList'],
}
```

