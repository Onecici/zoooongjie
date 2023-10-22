```
npm install hammerjs
```

```js
import Hammer from 'hammerjs';

mounted() {
     const element = this.$el;
    
     this.hammer = new Hammer(element,{
        recognizers: [
          [Hammer.Press, { time: 1000 }], // 设置长按时间为1秒（1000毫秒）
        ],
      });
    
     this.hammer.on('press', this.handlePress);
   },
   methods: {
     handlePress(event) {
       // 处理长按事件的逻辑
     }
   }
```

