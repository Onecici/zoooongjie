```js
npm install lib-flexible  // 动态修改html字体大小插件
npm install postcss-plugin-px2rem -D  // 自动将px转rem插件  不装的话也许可以自己写rem

// 引入全局main.js
import "lib-flexible/flexible.js"

// 配置vue.config.js
// 在module.exports内添以下配置
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require("postcss-plugin-px2rem")({
              rootValue: 37.5,  // 因为lib-flexible默认是设计稿宽度除以10  所以这里根据设计稿宽除以10填写就行了 (1rem = 37.5px  10rem=375px)  所以rootValue表示当前1rem=37.5px  如果当lib-flexible设计稿宽度除以20 那1rem = 18.75px
              exclude: /(node_module)/,
              minPixelValue: 3,  // 表示3px以下都不转换
            }),
          ],
        },
      },
    },
  },
    

  此时保存项目时就自动把px转成rem了
  
  rootValue 就先理解为设计稿的尺寸 / 10 就行了,为什么除以10呢,因为flexble.js里面默认分为10等份,你也可以自行去js文件中修改平分的份数,这时候的rootvalu就是设计稿 / 你设置的份数

#className {
   font-size: 24px;/*no*/      //用/*no*/标识符可以这行代码不用转换
}

```

rootValue修改份数：https://blog.csdn.net/KaTanfei/article/details/126118053

为什么要修改份数

因为可能是需要符合公司要求吧 比如1920px的宽度 html的根字号必须是16px



### 自动将px转rem插件的具体配置

https://blog.csdn.net/qq_32615575/article/details/111685696

```js
module.exports={
    css:{
          loaderOptions: {
              postcss: {
                  plugins: [
                      require('postcss-plugin-px2rem')({
                         rootValue: 37.5, //换算基数，1rem相当于10px,值为37.5时,1rem为20px,淘宝的flex默认为1rem为10px 
                         // unitPrecision: 5, //允许REM单位增长到的十进制数字。
                         //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                         // propBlackList: ['border'], //黑名单
                         exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                         // selectorBlackList: [], //要忽略并保留为px的选择器
                         // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                         // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
                         mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
                         minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
                            }),
                        ]
                    }
                }
            }
}
```

参考资料

https://codeleading.com/article/83045538948/



### vite配置

```js
// vite.config.json中配置如下


import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import pxtorem from 'postcss-plugin-px2rem' // 引入

const loder_pxtorem = pxtorem({
  rootValue: 37.5, // 根据设计稿宽除以10就行了
  exclude: /(node_module)/,
  minPixelValue: 3 // 表示3px以下都不转换
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
      plugins: [loder_pxtorem]
    }
  }
})

```

