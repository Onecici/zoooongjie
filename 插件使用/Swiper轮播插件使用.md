```
npm i swiper@4.5.1

 这个版本比较稳定
 
 网址https://www.swiper.com.cn/api/index.html
```

```js
main.js导入全局使用

import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min";

```

```js
在组件中引入
import Swiper from 'swiper'

```

示例

```vue
<template>
    <div class="match-banner">
        <div class="bannerList">
            <div class="swiper-wrapper">
                <div class="swiper-slide a"></div>
                <div class="swiper-slide a"></div>
                <div class="swiper-slide a"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    data() {
        return {
            swiper: null
        }
    },
    mounted() {
        this.swiper = new Swiper(".bannerList", {
            slidesPerView: "auto",
            spaceBetween: 30,
        });

    },
    methods: {
    }
}
</script>
```

