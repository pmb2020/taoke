<template>
	<view class="goods-detail">
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration">
			<swiper-item v-for="(item,index) in images">
				<view class="swiper-item">
					<image :src="item" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="detail-body">
			<view class="goods-text">
				<view class="price">￥{{goodsDetail.actualPrice}}<text class="del-price">￥{{goodsDetail.originalPrice}}</text></view>
				<view class="month-sale">月销量：{{goodsDetail.monthSales}}</view>
			</view>
			<view class="goods-title"><text class="tag">淘宝</text>{{goodsDetail.title}}</view>
			<view @click="couponClick" class="coupon-b"
				style="background-image: url(https://api.gold404.cn/taoke/images/coupon-b.png);">
				<view>
					<text style="font-size: 54rpx;display: block;">￥{{goodsDetail.couponPrice}}</text>
					<text class="coupon-time">使用期限 {{goodsDetail.couponStartTime}}~{{goodsDetail.couponEndTime}}</text>
				</view>
				<text class="coupon-text">立即领券</text>
			</view>
		</view>
		<!-- 店铺信息 -->
		<view class="goods-shop">
			<view class="logo">
				<image :src="goodsDetail.shopLogo" mode="widthFix"></image>
			</view>
			<view class="shop-info">
				<view>
					<text class="name">{{goodsDetail.shopName}}</text>
				</view>
				<view class="desc">
					<text>描述{{goodsDetail.dsrScore}}</text>
					<text>卖家{{goodsDetail.serviceScore}}</text>
					<text>物流{{goodsDetail.shipScore}}</text>
				</view>
			</view>
		</view>
		<!-- 商品评价 -->
		<!-- <view class="goods-comment">
			
		</view> -->
		<!-- 商品详情 -->
		<view class="goods-show">
			<view class="title">商品详情</view>
			<image v-for="(item,index) in goodsDetail.detailPics" :src="item.img" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			images:{},
			goodsDetail:{
				type:Object,
				default:{}
			},
			indicatorDots:{
				type:Boolean,
				default:true
			},
			autoplay:{
				type:Boolean,
				default:true
			},
			interval:{
				default:5000
			},
			duration:{
				default:500
			}
		},
		data() {
			return {
				
			}
		},
		mounted() {
			// console.log(this.goodsDetail)
		},
		methods: {
			couponClick(){
				this.$emit('couponClick')
			}
		}
	}
</script>

<style lang="scss" scoped>
	$pad:20rpx 20rpx;
	@mixin flex-between {
		display: flex;
		justify-content: space-between;
	}
	@mixin box-shadow {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		border-radius: 12px;
	}
	.goods-detail{
		background-color: #f6f6f6;
	}
	.detail-body{
		background-color: #fff;
		padding:$pad;
		margin:20rpx;
		@include box-shadow;
	}
	.swiper{
		height: 600rpx;
	}
	.swiper-item{
		image{
			width: 100%;
		}
	}
	.goods-text{
		@include flex-between;
		.price{
			color: red;
			font-weight: 600;
			font-size: 52rpx;
			.del-price{
				color: #888;
				font-size: 28rpx;
				margin-left: 5px;
				text-decoration: line-through;
			}
		}
		.month-sale{
			display: flex;
			align-items: flex-end;
			margin-bottom: 6rpx;
			color: #888;
			font-size: 28rpx;
		}
	}
	
	.goods-title {
		font-size: 32rpx;
		font-weight: 600;
		margin: 8rpx 0;
		.tag{
			background-color: red;
			color: #fff;
			font-size: 20rpx;
			line-height: 1;
			font-weight: normal;
			padding: 4rpx 6rpx;
			border-radius: 4px;
			margin-right: 4px;
			position: relative;
			top: -4rpx;
		}
	}
	.goods-shop{
		display: flex;
		margin: 20rpx;
		background-color: #fff;
		padding: $pad;
		@include box-shadow;
		.logo{
			margin-right: 20rpx;
			image{
				width: 120rpx;
				height: 120rpx;
				border-radius: 5px;
			}
		}
		.shop-info{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-bottom: 10rpx;
			flex: 1;
			.name{
				font-weight: bold;
			}
		}
		.desc{
			font-size: 24rpx;
			color: #888;
			text{
				margin-right: 30rpx;
			}
		}
	}
	.goods-show{
		background-color: #fff;
		
		font-weight: bold;
		.title{
			padding: $pad;
			margin: 0 20rpx 0 20rpx;
			position: relative;
			&:before{
				position: absolute;
				left: 8rpx;
				top: 30rpx;
				content: "";
				display: block;
				width: 3px;
				height: 25rpx;
				background-color: red;
			}
		}
		image{
			outline-width: 0;
			vertical-align: top;
			width: 100%;
		}
	}
	.coupon-b {
		@include flex-between;
		margin: 20rpx 0;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		height: 130rpx;
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
		width: 100%;
		height: 100%;
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
	
</style>
