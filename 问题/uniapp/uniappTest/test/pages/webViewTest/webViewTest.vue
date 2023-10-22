<template>

</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 0,
				windowHeight: 0
			}
		},
		mounted() {
			// 获取当前系统信息  该方法兼容app端
			uni.getSystemInfo({
				success: (e) => {
					this.statusBarHeight = e.statusBarHeight;
					this.windowHeight = e.windowHeight;
				}
			})
			// #ifdef APP-PLUS
			// 创建webView元素  webView只适合app端下创建
			// webView也可以在标签中创建但是不能动态修改样式  创建出来就固定了
			// 第一个参数是url  第二个参数是webView的id(当创建多个webview时获取某一个元素用)  第三个参数是设置样式
			this.webView = plus.webview.create('http://h5.ljzb18.com/', 'webview', {
				top: this.statusBarHeight + 'px',
				height: this.windowHeight - this.statusBarHeight + 'px'
			})

			// 创建完后显示webView元素
			this.webView.show()
			// plus.webview.show('webview')
			// #endif
		},
		onHide() {
			// #ifdef APP-PLUS
			
			// 两种写法
			this.webView.hide()
			// plus.webview.hide('webview')
			
			// #endif
		},
		onShow() {
			// #ifdef APP-PLUS
			
			this.webView.show()
			// plus.webview.show('webview')
			
			// #endif
		}
	}
</script>

<style>

</style>