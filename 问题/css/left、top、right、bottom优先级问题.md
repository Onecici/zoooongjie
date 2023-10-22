position中的这些属性left 和 top属性优先级最高

如果一个元素实现拖拽效果  只能通过鼠标的x和y坐标来实现 x坐标相当于left y就是top           

如果浏览器滚动到对应的距离时就会将元素固定定位到右下角此时添加bottom和right属性即可实现 但是因为设置有left和top所以不生效优先级问题此时可以将当前元素的left和top属性删除

删除样式属性即可
        videoEl.style.setProperty('left', 'initial')
        videoEl.style.setProperty('top', 'initial')