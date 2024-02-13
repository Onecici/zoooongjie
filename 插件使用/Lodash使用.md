```
npm i --save lodash


```

```js
import lodash from 'lodash'

// 防抖
lodash.debounce(函数体, 300); 
// 节流
lodash.throttle(函数体, 200);
```

示例

```js
        // 鼠标移入时在0.3s内才会执行debounce防抖
        const handleOver = _.debounce((e, v) => {
            var pos = d3.pointer(e) // 用于获取鼠标事件的坐标
            var box = d3.select(e.target).node().getBBox()
            d3.select('.block').insert('text')
                .attr('class', 'tooltip')
                .attr('text-anchor', 'middle')
                .text(v.date)
                .attr('x', box.x)
                .attr('y', box.y)
                .transition()
                .duration(400)
                .attr('fill', 'black')
                .attr('opacity', 1)
                .attr('font-size', 12)
        }, 300)

        // 鼠标移出时取消debounce防抖函数的执行
        function handleOut(e, v) {
            handleOver.cancel()
            svg.select('.tooltip').remove()
        }
```

