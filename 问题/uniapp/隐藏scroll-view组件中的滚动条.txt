	/deep/ ::-webkit-scrollbar {
		//隐藏scroll-view里面自带的滚动条
		display: block; //必加
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: auto !important;
		background: transparent;
		overflow: auto !important;
	}


粘贴到App.vue中即可