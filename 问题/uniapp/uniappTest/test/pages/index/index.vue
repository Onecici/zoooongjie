<template>
	<view>
		<view class="content">
			<u-swiper class="homeSwiper" :title="true" :list="list" :effect3d="true"></u-swiper>
			<u-card class="card">
				<view slot="body">
					<ul class="shopItem">
						<li v-for="item in 8" :key="item"></li>
					</ul>
				</view>
			</u-card>
			<u-card title="商品banner活动" class="shop1">
				<view slot="body">
					<image ref="shop1_item" class="animate__animated animate__fadeInLeft"
						:class="shop1.defaultShop1_item_ClassName"
						:style="{animationDuration: `${shop1.shop1_item_animationTime}s`}"
						@click="tagetShopItemInfo(item)" v-for="(item,index) in list" :key="index" :src="item.image">
					</image>
				</view>
			</u-card>
			<!-- 按住时会添加一个类 失去就会消失 -->
			<view class="testAniamte animate__animated" hover-class="animate__fadeInLeft">
				hover-class测
			</view>
		</view>
	</view>
</template>

<script>
	import {
		isElementNotInViewport,
		enterAnimation
	} from '@/utils/common.js'
	export default {
		data() {
			return {
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				shop1: {
					shop1_item_animationTime: 6,
					defaultShop1_item_ClassName: 'shop1_item'
				},
			}
		},
		mounted() {

		},
		methods: {
			tagetShopItemInfo(item) {
				uni.navigateTo({
					url: `/pages/shopInfo/shopInfo?title=${item.title}&imgSrc=${item.image}`,
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.homeSwiper {
		width: 100%;

		::v-deep uni-swiper {
			height: 400rpx !important;
		}

	}

	.card {
		background-color: #888;

		::v-deep .u-card__head {
			display: none;
		}

		.shopItem {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;

			li {
				width: calc(25% - 40rpx);
				height: 100rpx;
				background-color: skyblue;
				margin-left: 40rpx;
				margin-top: 30rpx;

				&:nth-child(4n + 1) {
					margin-left: 0;
				}
			}
		}
	}

	.shop1 {
		background-color: #ccc;

		::v-deep .u-card__head {
			background-color: rgba(32, 255, 255, 0.2);
		}

		.shop1_item {
			width: 100%;
			height: 300rpx;
			border-radius: 30rpx;
			margin-top: 40rpx;
		}
	}
</style>