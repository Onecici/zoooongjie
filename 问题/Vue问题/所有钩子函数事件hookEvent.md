1. 通过$on(eventName, eventHandler) 侦听一个事件。
2. 通过$once(eventName，eventHandler) 一次性侦听一个事件 执行完后自动销毁该事件。
3. 通过$off(eventName, eventHandler) 停止侦听一个事件。



## 使用场景

```js
export default{
  methods:{
    fn(){ // 如果需要创建一个定时器而且还需要进行销毁的话 最好都写在一个函数内这样方便维护
      const timer = setInterval(()=>{
        console.log('1');
      },1000);
		// 监听一次即可 因为beforeDestory执行之后整个组件就销毁了
      this.$once('hook:beforeDestroy',()=>{  // 监听hook中的beforeDestory函数方式
        clearInterval(timer);
        timer = null;
      })
    }
  }
}
```

