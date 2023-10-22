// 阻止手机端下拉刷新浏览器
export const disableDefaultScrollEvent = (el) => {
    let isDragging = false
    let startY = 0
    el.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY // 获取初始触摸Y轴位置
        isDragging = true
    })
    el.addEventListener('touchmove', (e) => {
        if (isDragging) {
            // 判断 下拉或上拉 行为
            // deltaY值 大于0就是下拉 小于就是上拉
            const deltaY = e.touches[0].clientY - startY;
            if (deltaY > 0 && el.scrollTop <= 0) {
                e.preventDefault();
            }
        }
    })
    el.addEventListener('touchend', () => {
        isDragging = false
    })
}

