### 解决方法一

```js
element.addEventListener('touchstart', function () {
    执行的代码...
},{ passive: false })

passive阻止默认事件
也可以通过e.preventDefault
```

### 解决方法二

```css

* {
	touch-action: pan-y;
}
```

