```
npm install lottie-web -S
```

1.项目中引入

```js
import lottie from 'lottie-web';
import animationData from "./data.js"  // AE创建出来的动画JSON文件

// 替换动画JSON数据中的所需图片资源地址   因为动画JSON创建出来时的资源路径和项目的不一致需要替换
animationData.assets.forEach((item, index) => {
    if(item.u && item.p){
        // item.u是动画资源文件的URL,URL是用于在网络上定位资源的地址
        item.u = ''
        // item.p是本地项目动画资源文件的路径
        item.p = require(`./images/img_${index}.png`)
    }
});



export default {
    mounted(){
      	// 创建动画实例
        this.animation = lottie.loadAnimation({
            container: this.$refs.domId, // dom元素(需要有宽高)
            renderer: 'svg',
            loop: false,
            animationData: animationData, // 动画JSON文件
        });

        // 监听动画是否完成
        this.animation.addEventListener('complete', () => {
            this.showAnimate = false;
        });
    },
    methods:{
        animationFun(){
            this.animation.goToAndPlay(0); // 播放
        }
    }
}
```

