```js
除了布尔值参数来指定事件冒泡触发的阶段外，addEventListener 方法还支持一个对象参数，用于更详细地控制事件的行为。

这个对象参数可以包含以下属性：

- capture：布尔值，指定事件是否在捕获阶段触发。
- once：布尔值，指定事件是否只触发一次，触发后自动移除事件监听器。
- passive：布尔值，指定事件监听器是否为被动的，用于优化滚动等性能敏感的事件。

下面是使用对象参数的示例：

element.addEventListener('click', function(event) {
  console.log('点击事件触发');
}, {
  capture: true,
  once: true,
  passive: true
});


在这个示例中，我们将事件监听器的参数设置为一个对象，指定了 capture 为 true（在捕获阶段触发）、once 为 true（只触发一次）和 passive 为 true（被动的）。

需要注意的是，once 和 passive 属性在某些浏览器中可能不被支持。在使用这些属性时，请确保你的目标浏览器支持它们或提供适当的降级处理
```

