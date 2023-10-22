```js
// 安装
npm install gsap


// 安装完成后，在需要使用GSAP的文件中，使用import语句将库导入：
import { gsap } from "gsap";

// 示例1
gsap.to(".box", {duration: 2, x: 100, rotation: 360});
// 在2秒内将class为"box"的元素向右移动100个像素，并且旋转360度

```

```js
// 示例2
gsap.to('.box', {
      duration: 2,
      x: 100,
      onComplete: function () {
        gsap.to('.box', {
          duration: 1,
          rotation: 360
        })
      }
})
// 在2秒内将class为"box"的元素向右移动100个像素动画执行完毕后在1秒内将class为"box"的元素旋转360度
// onComplete是上一个动画执行完毕后的回调函数
```

```js
// 示例3  实现数字滚动效果 React版

  const animationCountHandle = () => {
    // 因为元素是通过useRef获取的 所以直接修改里面的innerText属性  视图也会更新
    const element = numberRef.current  // 当前获取到的是dom元素具有响应式
    gsap.to(element, {
      duration: 5,
      innerText: 100, // 表示5秒内动画执行完后对第一个参数对象中的innerText属性设置动画结束值
      ease: 'power1.out',
     	repeat: -1,
      yoyo: true,
      yoyoEase: true,
      onUpdate: function () {
        const value = Math.floor(this.targets()[0].innerText)
        this.targets()[0].innerText = value
      }
    })
  }

  // repeat表示重复执行次数 -1表示无限
  // yoyo表示开启动画往返效果
  // yoyoEase表示开启往返时动画曲线循环  (to 1次---from 1次    to 1次---from 1次 ....)
  // onUpdate表示当前动画在5秒内运行时数据发生改变时就会调用该方法
  // this.targets()[0]可以获取当前动画在运行时的对象或dom元素
```

```js
// gsap.to方法是以初始值(放入到第一个参数中到数据就是初始值)作为动画开始   gsap.from是以结束值作为动画开始
// 接收2个参数 第一个参数可以放class类名或dom元素或者是一个对象数据(如ref获取到的dom对象也算)  第二个参数是执行动画的配置项
```



#### 回调函数(在gsap.to/from方法第二个参数中设置)

```js
onComplete 动画完成时到回调
onStart 动画开始时调用
onUpdate 每次动画更新时调用(在动画处于运行状态时数据发生更新)
onRepeat 每次动画重复时调用一次
onReverseComplete 动画反转后再次到达其起点时调用
```

#### 控制当前动画暂停和恢复等方式

```js
    const tween = gsap.to(element, {
      duration: 5,
      innerText: 100,
      ease: 'power1.out',
     	repeat: -1,
      yoyo: true,
      yoyoEase: true,
      onUpdate: function () {
        const value = Math.floor(this.targets()[0].innerText)
        this.targets()[0].innerText = value
      }
    })
   	
    tween.pause() 暂停
    tween.resume() 恢复
    tween.reverse() 反向播放
    tween.SEEK(0.5) 让当前动画跳到0.5s时的状态
    tween.progress(0.25) 跳到4分之1处
    tween.timeScale(0.5) 速度减慢
    tween.timeScale(2) 速度翻倍
    tween.kill() 删除动画

```

