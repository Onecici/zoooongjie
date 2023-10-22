```js
const data = ref([
  {
    type: "bean",
    badge: "赚豆",
    detail: '今天再下<span class="info-num">1</span>单赚<span class="info-num">400</span>吃货豆',
    btn: "领任务",
  },
  {
    type: "hongbao”
    badge: "dasdad",
    detail: "66666666",
    btn: "adsdasa",
  },
]);

<ScrollBar :data="data" />

```

