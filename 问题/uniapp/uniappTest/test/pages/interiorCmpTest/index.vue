<template>
	<view>
		<video id="videoPlayer" class="videoPlayer" src="http://img.ljzb18.com/lou1t_eB7KPxYjzuW3r42kS72_uQ.mp4"
			 :autoplay="true" :danmu-list="danmuList" enable-danmu></video>
		<u-input v-model="danmuVal"></u-input>
		<u-button @click="sendDamu">发送弹幕</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				danmuList: [{
						text: '第 1s 出现的弹幕',
						color: '#ff0000',
						time: 1
					},
					{
						text: '第 3s 出现的弹幕',
						color: '#ff00ff',
						time: 3
					}
				],
				danmuVal: ''
			}
		},
		onReady() {
			this.videoContext = uni.createVideoContext('videoPlayer')
		},
		methods: {
			sendDamu() {
				const danmuval = this.danmuVal.trim()
				if (danmuval.length > 0) {
					this.videoContext.sendDanmu({
						text: this.danmuVal,
						color: '#ffffff'
					})
				} else {
					uni.showToast({
						title: '内容不能为空',
						icon: 'none'
					})
				}
				this.danmuVal = ''
			},
		}
	}
</script>

<style lang="scss">
	.videoPlayer {
		width: 100%;
		height: 500rpx;
	}
</style>