<template>
	<view class="about">
		<view class="title">关于页面</view>
		<view :id="currentId" :change:id="changeId">
			id: {{currentId}}
		</view>
		<input class="currentId" placeholder="请输入id" v-model="currentId" type="text">
		<uni-card title="标题文字" thumbnail="" extra="额外信息" note="Tips">
			内容主体，可自定义内容及样式
		</uni-card>
		<button @click="getStudents">点击获取参数</button>
		<button @click="handleWXshowModal">点击微信组件弹窗</button>
		<button @click="handleUNIAPPshowModal">点击uniapp组件弹窗</button>
		<button @click="targetTabarPage">点击跳转到首页</button>
	</view>
</template>

<script>
	import {
		getStudents
	} from '@/api/myNodeTestData.js'
	export default {
		data() {
			return {
				currentId: null
			}
		},
		methods: {
			async getStudents() {
				const {
					currentId
				} = this
				try {
					const res = await getStudents({
						id: currentId
					})
					console.log(res)
				} catch (err) {
					console.log(err)
				}
			},
			handleWXshowModal() {
				wx.showModal({
					title: '微信组件弹窗',
					content: '内容'
				})
			},
			handleUNIAPPshowModal() {
				uni.showModal({
					title: 'uniapp组件弹窗',
					content: '内容'
				})
			},
			targetTabarPage() {
				// switchTab方法可以跳转tabar页
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			changeId() {
				console.log('id改变了')
			}
		}
	}
</script>

<style lang="scss">
	.currentId {
		width: 50%;
		border: 2rpx solid #ccc;
	}
	.title {
		display: flex;
		justify-content: center;
	}
</style>