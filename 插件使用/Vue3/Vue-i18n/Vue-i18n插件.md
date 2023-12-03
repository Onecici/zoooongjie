```js
"vue-i18n": "^8.26.8"

//  在main.js里写入以下代码

const messages = {
  en: {
    hello: "hello world {0}{1}",
  },
  ja: {
    hello: "こんにちは、世界 {0}{1}",
  },
}

const i18n = new VueI18n({
  locale: "ja", // 设置语言包名称
  fallbackLocale: 'en', // 当locale语言不存在时就用该语言
  messages, // 设置语言包数据集合
})


app.use(i18n)
```

#### 在组件页面中使用

```vue
<template>
	<div>{{ $t("en.hello") }}</div>
	<i18n path="hello" tag="div">  // path是每个语言包中存在的键名  tag生成输出的标签名
    	<span class="hightlight">0</span>  // 这里面内容分别显示在当前语言环境对象属性的插槽中{0}{1}
    	<span class="hightlight">1</span>
	</i18n>
</template>
```



详情https://kazupon.github.io/vue-i18n/zh/
