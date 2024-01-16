```js
npm install vuescroll -S
```



main.js引入

```js
import vuescroll from 'vuescroll';
Vue.use(vuescroll);
```

使用

![image-20231205192603554](.\assets\image-20231205192603554.png)

```js
// 简单配置
    computed: {
        ops() {
            return {
                bar: {
                    onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
                    keepShow: true, // 是否保持滚动条显示
                    background: "#F5F5F5", //滚动条颜色
                    opacity: 0.05, //滚动条透明度
                },
            }
        }
    },
```

详情https://www.jb51.net/javascript/306532rt8.htm