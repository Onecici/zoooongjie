```js
    document.addEventListener('mouseout', (e) => {
      console.log('离开某个元素了')
	  console.log(e.target)
    })

// 一旦一个元素被绑定了mouseout事件 那么当我鼠标离开了这个元素下的某个元素就会触发这个事件
// 适合做动画效果
```

