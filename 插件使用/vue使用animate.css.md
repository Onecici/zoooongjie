```js
npm install animate.css -S

import 'animate.css'



// 在html中使用，在class中添加：animate__animated以及想要的动画class比如animate__fadeInLeft
<div class="animate__animated animate__fadeInLeft">
     <div class="">CyberLand</div>      
</div>

// css修改动画配置   相当于覆盖掉animate.css里的属性
#yourElement{
    animate-duration: 2s;    //动画持续时间
    animate-delay: 1s;    //动画延迟时间
    animate-iteration-count: 2;    //动画执行次数
}
```

