<template>
	<view class="goods-list-two">
		<view class="goods-item" v-for="(item,index) in data">
			<image style="width: 100%;" :src="item.main_image" mode="widthFix"></image>
			<view class="goods-item-body">
				<view class="title txt-line-2">{{item.title}}</view>
				<view class="coupon">
					<text class="left">券</text>
					<text class="right">￥{{item.coupon_amount}}</text>
				</view>
				<view class="price">
					<text>券后价￥</text>
					<text class="num">{{item.price}}</text>
					<text class="del-price">￥<text>{{item.origin_price}}</text></text>
				</view>
				<view style="background-color: red;color: #fff;;padding: 5px 10px;border-radius: 4px;">省￥15</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref,reactive} from 'vue'
	const props = defineProps({
		data:{
			type:Object,
			default:[]
		}
	})
	console.log(props)
</script>

<style lang="scss" scoped>
	$coupon-color: #ffaa00;
	.goods-list-two{
		padding: 15px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.goods-item{
		background-color: #fff;
		width: 48.5%;
		margin-bottom: 15px;
		border-radius: 4px;
		overflow: hidden;
		.title{
			font-size: 28rpx;
			font-weight: 600;
			margin-bottom: 10rpx;
		}
	}
	.goods-item-body{
		padding: 10rpx;
		.price{
			color: red;
			font-size: 28rpx;
			margin-bottom: 10rpx;
			.num{
				font-size: 36rpx;
			}
			.del-price{
				text-decoration: line-through;
				color: #888;
				margin-left: 30rpx;
			}
		}
	}
	.coupon{
		display: inline-block;
		border-radius: 4px;
		font-size: 28rpx;
		margin-bottom: 10rpx;
		border: 1px solid $coupon-color;
		color: #fff;
		.left{
			background-color: $coupon-color;
			color: #fff;
			padding: 1px 5px;
		}
		.right{
			color: $coupon-color;padding: 0 4px;
		}
	}
</style>
