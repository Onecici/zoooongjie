```css
/* 所有内外边距清零 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    /* css3 抗锯齿性（文字放大后会有锯齿性），让文字显示的更清晰  */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    /* 文字：大小为12px/行高是文字的1.5倍 字体（'\5B8B\4F53'） 就是宋体的意思，因为汉字可能会显示成乱码，所以用 unicode ） */
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, '\5B8B\4F53', sans-serif;
    color: #333;
}

/* em, i 标签会默认让字体切斜，设置成正常显示 */
em,
i {
    font-style: normal;
}

/* 去除 a 标签的默认样式 */
a {
    text-decoration: none;
    color: #333;
}

/* 去除 li 标签的默认样式 */
li {
    list-style: none;
}

img {
    /* 兼容低版本浏览器，如果图片外边包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底部会有空隙的问题 */
    vertical-align: middle;
}

/* 按钮时的鼠标移上去形状 */
input[type=submit],
input[type=reset],
input[type=button],
button {
    cursor: pointer;
}

/* 去除默认表单元素的轮廓线（默认的太丑了） */
input,
select,
textarea {
    outline: none;
    overflow: hidden;
    border: 0;
}

/* 去除多行文本框默认可拉伸 */
textarea {
    resize: none;
}

/* 清除浮动 */
.clearfix::after {
    content: '\200B';
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
}

/* 清除浮动（兼容IE） */
.clearfix {
    *zoom: 1;
}
```

