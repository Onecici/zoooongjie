```js
        bannerListOpen: {
            handler(val) {
                this.getBannerList(val)
            },
            immediate: true
        }
```

​        watch监听vuex状态的的val值即使在组件销毁了下一次组件渲染后也能缓存上一次的结果