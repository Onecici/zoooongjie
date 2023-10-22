```js
// vite内置默认的环境变量
import.meta.env.MODE // 获取当前所处环境
import.meta.env.PROD // 获取是否处于生产环境
import.meta.env.DEV	 // 获取是否处于开发环境
import.meta.env.SSR	 // 获取当前是否在服务器上运行


// 自定义环境变量只有以VITE_为开头的环境变量vite才会处理 如VITE_BASE_URL = '127.0.0.1'
```

