```js
npm i autoprefixer -D
```



### 效果

处理前css代码

```css
display: flex;
```

处理后

```css
// 自动添加css兼容代码s
display: -webkit-box;
display: -ms-flexbox;
display: flex;
```

### vite配置

```js
// vite.config.js配置如下


import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


// 1.引入Autoprefixer
import autoprefixer from 'autoprefixer' 
// 2.配置autoprefixer
const loder_autoprefixer = autoprefixer({
  overrideBrowserslist: ['last 2 versions', 'ie >= 9', 'ios >= 7', 'android >= 4.4'],
  cascade: false
})


export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [loder_autoprefixer] // 3.使用
    }
  }
})
```

