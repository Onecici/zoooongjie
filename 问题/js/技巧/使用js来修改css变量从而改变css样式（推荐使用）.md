##### css文件

```css
在CSS中定义一个变量：

:root {
  --my-color: red;
}
```



##### js文件

```js
// 获取dom
const root = document.documentElement;

const myColor = getComputedStyle(root).getPropertyValue('--my-color'); // 获取css变量的值
console.log(myColor); // 输出: "red"

// 修改css变量的值
root.style.setProperty('--my-color', 'blue');
```

