<template>
	<view class="content">
		<text>Test页面内容</text>
	</view>
</template>

<script>
	export default {
		onShow() {
			uni.$emit('show')
		},
		onHide() {
			uni.$emit('hide')
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #ccc;
	}
</style>