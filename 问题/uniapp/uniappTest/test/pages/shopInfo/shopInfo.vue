<template>
	<view>
		<view class="shop_title">
			<text>{{title}}</text>
		</view>
		<view class="shopInfoImgWrap">
			<image class="shopInfoImg_img" :src="imgSrc"></image>
		</view>
		<u-card class="shop_body">
			<view slot='body'>
				<image ref="shopInfo_item" :key="item" class="animate__animated" v-for="item in 6"
					:style="{animationDuration: `${shop_body.shop1_item_animationTime}s`}"
					:class="shop_body.defaultClassName" :src="imgSrc"></image>
			</view>
		</u-card>
	</view>
</template>

<script>
	import {
		enterAnimation
	} from '@/utils/common.js'
	export default {
		data() {
			return {
				title: '',
				imgSrc: '',
				shop_body: {
					shop1_item_animationTime: 1,
					defaultClassName: 'shop_bodyImg'
				}
			}
		},
		onLoad(option) {
			const {
				title,
				imgSrc
			} = option
			this.title = title
			this.imgSrc = imgSrc
			console.log(imgSrc)
		},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped>
	.shop_title {
		text-align: center;
		font-size: 34rpx;
	}

	.shopInfoImgWrap {
		.shopInfoImg_img {
			width: 100%;
			height: 370rpx;
		}
	}

	.shop_body {
		background-color: #dff7de;

		::v-deep .u-card__head {
			display: none;
		}

		.shop_bodyImg {
			width: 100%;
			height: 280rpx;
			margin-top: 30rpx;

			&:first-child {
				margin-top: 0;
			}
		}
	}
</style>