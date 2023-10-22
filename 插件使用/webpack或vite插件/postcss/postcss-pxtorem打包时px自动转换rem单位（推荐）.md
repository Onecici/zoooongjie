```js
npm i postcss-pxtorem -D
```

### vite配置

#### 步骤一

```js
// vite.config.js中配置如下

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// 1.引入
import pxtorem from 'postcss-pxtorem'
// 2.配置
const loder_pxtorem = pxtorem({
  rootValue: 37.5, // 步骤二中的 设置根元素字体大小的值
  propList: ['*'] // 转换所有属性的值
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
      plugins: [loder_pxtorem] // 3.使用
    }
  }
})
```

#### 步骤二

postcss-pxtorem只是将px转成rem单位 但是根字体大小需要另外js来控制

```js
// ------------------------------根目录创建lib目录再创建rem.js文件粘贴以下代码

// 设置字体默认大小
document.body.style.fontSize = '12px'
// 设置 rem 函数
function setRem() {
  // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  //得到html的Dom元素
  let htmlDom = document.getElementsByTagName('html')[0]
  //设置根元素字体大小
  htmlDom.style.fontSize = htmlWidth / 10 + 'px'  // 设计稿宽度除以10得到 1rem大小
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  console.log('窗口改变')
  setRem()
}

// 最后在main.js中引入即可
```

