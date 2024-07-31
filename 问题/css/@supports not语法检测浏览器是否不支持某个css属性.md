```css
/* 检测是否不支持 backdrop-filter */

/* 写法一 */
@supports not ((-webkit-backdrop-filter: blur()) or (backdrop-filter: blur())) {
    .van-tabbar,
    .user,
    .bet-list,
    .full-btn,
    .cart-meun {
        background-color: rgba(30, 31, 32, 1) !important;
    }
}

/* 写法二 */
@supports not (backdrop-filter: blur()){
	background: #282829;
}
```

