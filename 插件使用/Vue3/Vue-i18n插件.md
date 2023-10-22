```js
//  在main.js里写入以下代码

const messages = {
  en: {
    hello: "hello world {0}{1}",
  },
  ja: {
    hello: "こんにちは、世界 {0}{1}",
  },
}

const i18n = createI18n({
  locale: "ja", // 设置语言包名称
  messages, // 设置语言包数据集合
})


app.use(i18n)
```

#### 在组件页面中使用

```vue
<template>
	<div>{{ $t("hello") }}</div>
	<i18n path="hello" tag="div">  // path是语言包的对象路径
    	<span class="hightlight">0</span>  // 这里面内容分别显示在语言包数据中的插槽中{0}{1}
    	<span class="hightlight">1</span>
	</i18n>
</template>
```



