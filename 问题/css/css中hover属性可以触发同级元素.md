/*设置鼠标移入box盒子，其下一个兄弟box2盒子背景色变为紫色*/
.box:hover + .box2{
	background-color: purple;
}
.box:hover ~ .box2{
	background-color: purple;
}

推荐使用~写法   这种写法对less和scss兼容