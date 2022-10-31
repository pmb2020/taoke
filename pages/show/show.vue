<template>
	<view class="show">
		<!-- 商品详情轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
			<swiper-item v-for="(item,index) in goodsDetail.images" :key="index">
				<view class="swiper-item">
					<image class="image" :src="item" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 商品基本信息 -->
		<view class="goods-info" style="">
			<text style="color: red;font-size: 48rpx;">￥{{goodsDetail.coupon_price}}</text>
			<text class="del-price">￥{{goodsDetail.origin_price}}</text>
			<text style="float: right;margin-top: 25rpx;color: #888;">月销量：{{goodsDetail.volume}}</text>
			<text class="goods-title"><text class="m-tag-mr">淘</text>{{goodsDetail.title}}</text>
			<view @click="lingquan(goodsDetail.tao_id)" class="coupon-b"
				style="background-image: url(../../static/coupon-b.png);">
				<view>
					<text style="font-size: 54rpx;display: block;">￥{{goodsDetail.coupon_amount}}</text>
					<text class="coupon-time">使用期限 {{goodsDetail.coupon_start_time}}~{{goodsDetail.coupon_end_time}}</text>
				</view>
				<text class="coupon-text">立即领券</text>
			</view>
		</view>
		<!-- 店铺 -->
		<view class="shop">
			<uni-icons type="shop-filled" color="#ff0000" size="25"></uni-icons>
			<text style="margin-left: 5px;">{{goodsDetail.shop_name}}</text>
		</view>
		<uni-section title="商品详情" type="line">
			<view style="padding: 30rpx;">暂无相关数据！</view>
		</uni-section>
		<uni-popup ref="popup" type="center">
			<view class="kouling-box">
				<text style="display: block;margin-top: 10rpx;">复制淘口令购买</text>
				<view class="kouling-text" style="">
					<text>{{tkouling}}</text>
				</view>
				<button type="warn" size="mini" @click="copy">一键复制</button>
			</view>
		</uni-popup>
		<view class="bottom-nav">
			<!-- <u-icon label="收藏" label-pos="bottom" size="40" label-size="24" name="star"></u-icon> -->
			<view class="nav-view u-flex">
				<button type="default" plain="true">分享赚 ￥9.88</button>
				<button type="default" plain="true" @click="toCoupon">自购省 ￥4.5</button>
			</view>
		</view>
		<view style="height: 96rpx;margin-top: 20rpx;"></view>
	</view>
</template>

<script>
	import uniCopy from '@/utils/uni-copy.js'
	import {
		getGoodsDetail,transformLink
	} from '@/apis/goods.js'
	export default {
		data() {
			return {
				klshow: false,
				goodsDetail: [],
				tkouling: '淘口令生成失败！',
			}
		},
		onLoad: function(option) {
			uni.showLoading({
				title: '加载中'
			})
			getGoodsDetail({
				id: option.id
			}).then(res => {
				uni.hideLoading();
				this.goodsDetail = res
			})
		},
		methods: {
			toCoupon() {
				uni.navigateTo({
					url: 'https://uland.taobao.com/quan/detail?sellerId=3048974064&activityId=a8c114d6fe834786a648790503ccb2a1'
				})
			},
			/**
			 * 点击立即领券
			 * @param {Object} goodsId 淘宝商品id
			 */
			lingquan(goodsId){
				uni.showLoading({
					title: '加载中'
				})
				transformLink({tao_id:goodsId}).then(res=>{
					uni.hideLoading();
					this.tkouling=res.kouLing
					this.$refs.popup.open()
				})
			},
			/**
			 * 复制淘口令
			 */
			copy() {
				uniCopy({
					content: this.tkouling,
					success: (res) => {
						uni.showToast({
							title:'复制成功'
						})
					},
					error: (err => {
						console.log(err)
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper{
		height: 600rpx;
	}
	.swiper-item {
		border-radius: 8px;
		overflow: hidden;
		.image {
			width: 100%;
			border-radius: 8px;
		}
	}

	.goods-info {
		padding: 15rpx 30rpx;
		margin-bottom: 20rpx;
		background-color: #fff;
	}

	.del-price {
		font-size: 24rpx;
		color: #666;
		font-weight: normal;
		text-decoration: line-through;
		margin-left: 4px;
	}

	.shop {
		display: flex;
		align-items: center;
		background-color: #fff;
		padding: 30rpx;
		margin-bottom: 20rpx;
	}

	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}

	.goods-title {
		display: block;
		font-size: 32rpx;
	}

	.coupon-b {
		margin: 20rpx 0;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		height: 130rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
		color: #fff;
	}

	.coupon-text {
		font-size: 32rpx;
		letter-spacing: 2rpx;
		margin-right: 22rpx;
	}

	.coupon-time {
		color: rgba(255, 255, 255, 0.67);
		font-size: 24rpx;
	}

	.kouling-box {
		background-color: #fff;
		border-radius: 8px;
		margin: 0 10%;
		min-height: 100rpx;
		padding: 20rpx;
		text-align: center;
		/* border-radius: 10px; */
	}

	.kouling-text {
		text-align: left;
		margin: 30rpx 0;
		background-color: #f7dfad;
		padding: 30rpx;
		border-radius: 5px;
		border: 1px solid #ff0000;
	}

	.bottom-nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 96rpx;
		border-top: 1px solid #f7f7f7;
		padding: 0 20rpx;
		background-color: #fff;
		.nav-view{
			display: flex;
			justify-content: space-between;
		}
	}

	.nav-view button:first-child {
		background-color: #ffb622;
		border-radius: 2em 0 0 2em;
	}

	.nav-view button {
		flex: 1;
		color: #fff;
		font-weight: 600;
		border: none;
		font-size: 28rpx;
		border-radius: 0;
		background-color: #ff8295;
		border-radius: 0 2em 2em 0;
	}
</style>