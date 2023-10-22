```js
// 安装
npm install postcss-px-to-viewport --save-dev
```



# VueCli配置

创建postcss.config.js

```js
// 简单写法
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
    },
  },
};
```

```js
// 进阶写法
module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      unitToConvert: "px", // 要转化的单位
      viewportWidth: 375, // UI设计稿的宽度
      unitPrecision: 6, // 转换后的精度，即小数点位数
      propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的所包含选择器名称 类名 id名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      landscape: false // 是否处理横屏情况
    }
  }
};
```

参考资料https://www.cnblogs.com/zhangnan35/p/12682925.html

# vite配置

因为vite中已经内联了postcss，所以并不需要额外的创建 postcss.config.js文件



在vite.config.js中配置

```js
import pxtovw from "postcss-px-to-viewport"; // 引入插件

// 创建插件并配置
const loder_pxtovw = pxtovw({
  viewportWidth: 375,
});

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [loder_pxtovw], // 在postcss中安装该插件
    },
  },
});
```

参考资料https://www.itxm.cn/post/42885.html
