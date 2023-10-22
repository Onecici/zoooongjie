<template>
	<!-- 非全屏 -->
	<view class="videoMask">
		<!-- 顶部 -->
		<view class="topStatusWrap video-bg-top">
			<view class="topStatus" :style="{height:topStatusHeight + 'px'}">
			</view>
			<view class="content">
				<view class="left">
					<text style="color: #fff;">
						左
					</text>
				</view>
				<view class="right">
					<text style="color: #fff;">
						右
					</text>
				</view>
			</view>
		</view>
		<!-- 中间 -->
		<view class="centerStatusWrap" @tap="doublePause">

		</view>
		<!-- 底部 -->
		<view class="bottomStatusWrap">

		</view>
	</view>
</template>

<script>
	import {
		Timer
	} from '@/utils/utils.js'

	let systemInfo;
	export default {
		data() {
			return {
				topStatusHeight: 0,
				doublePauseSum: 0,
				doublePauseTime: null
			}
		},
		created() {
			// 初始化双击定时器
			this.doublePauseTime = new Timer(() => {
				this.doublePauseSum = 0
				console.log('双击条件未达');
			}, 500)
			// 获取系统信息
			systemInfo = uni.getSystemInfoSync()
			// 获取手机状态栏高度
			this.topStatusHeight = systemInfo.statusBarHeight
		},
		methods: {
			// 双击暂停事件
			doublePause() {
				this.doublePauseSum++
				this.doublePauseTime.stop()
				this.doublePauseTime.start()

				if (this.doublePauseSum === 2) {
					this.doublePauseSum = 0
					this.doublePauseTime.stop()
					this.$emit('doublePause')
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.videoMask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		.topStatusWrap {

			.content {
				flex-direction: row;
				justify-content: space-between;
				height: 100rpx;

				.left,
				.right {
					width: 100rpx;
					justify-content: center;
					align-items: center;
				}

			}
		}

		.centerStatusWrap {
			flex: 1;
		}

		.bottomStatusWrap {
			height: 80rpx;
			background-color: rgba(0, 0, 0, 0.3);
		}
	}


	.video-bg-top {
		background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
	}

	.video-bg-bottom {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
	}
</style>