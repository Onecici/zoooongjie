问题一

```js
// vite内置默认的环境变量
import.meta.env.MODE // 获取当前所处环境
import.meta.env.PROD // 获取是否处于生产环境
import.meta.env.DEV	 // 获取是否处于开发环境
import.meta.env.SSR	 // 获取当前是否在服务器上运行


// 自定义环境变量只有以VITE_为开头的环境变量vite才会处理 如VITE_BASE_URL = '127.0.0.1'
```

问题二

```js
// 在vite.config.ts中获取自定义环境变量
// vite提供的import.meta.env这种方式只能在项目文件中使用，比如main.ts，是无法在vite.config.ts文件中使用的
import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  
  // 这样我们就能通过 process.env 拿到当前启动时所使用的环境变量了。
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({...});
}
```

