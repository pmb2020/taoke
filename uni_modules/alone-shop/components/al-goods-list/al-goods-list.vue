<template>
	<view>
		<view class="goods" v-for="(item,index) in data" :key="index" @click="toShow(item[reflectKey.id])">
			<view class="goods-left">
				<image :src="item[reflectKey.image]" lazy-load></image>
			</view>
			<view class="goods-right">
				<view class="txt-line2"><text class="tag">{{item[reflectKey.platform] || '淘宝'}}</text>{{item.title}}</view>
				<view>
					<view class="coupon">
						<text>{{item[reflectKey.coupon]}}元券</text>
					</view>
					<view class="bottom-txt">
						<view>
							<text class="price">￥{{item[reflectKey.price]}}</text>
							<text class="del-price">￥{{item[reflectKey.delPrice]}}</text>
						</view>
						<view class="sale-num"><text>已售{{item[reflectKey.saleNum]}}</text></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			data:{},
			clickUrl:'',
			reflectKey:{
				type:Object,
				default:{
					id:'id',
					image:'image',
					price:'price',
					delPrice:'delPrice',
					coupon:'coupon',
					saleNum:'saleNum',
					platform:'platform'
				}
			}
		},
		mounted() {
			// console.log(this.clickUrl)
		},
		methods:{
			test(){
				console.log('this ia test')
			},
			//点击跳转
			toShow(id){
				uni.navigateTo({
					url:this.clickUrl+'?id='+id
				})
				
			}
		}
	}
</script>
<style lang="scss" scoped>
	.goods {
		background-color: #fff;
		padding: 30rpx;
		padding-bottom: 20rpx;
		display: flex;
		font-size: 28rpx;
	}

	.goods-left {
		flex: 0 0 35%;
		margin-right: 30rpx;
		image {
			width: 100%;
			height: 250rpx;
			border-radius: 5px;
		}
	}

	.goods-right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.bottom{
			margin-bottom: 4px;
			font-weight: normal;
		}
		.tag{
			background-color: red;
			color: #fff;
			font-size: 20rpx;
			font-weight: normal;
			line-height: 1;
			padding: 4rpx 6rpx;
			border-radius: 4px;
			margin-right: 4px;
		}
	}
	.coupon{
		padding: 10rpx 30rpx;
		width: 25%;
		background-image: url('../../static/coupon1.png');
		background-size: 100% 100%;
		color: #fff;
		font-size: 24rpx;
		font-weight: normal;
		margin-bottom: 10rpx;
	}
	.bottom-txt{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		.price{
			color: red;
			font-size: 40rpx;
			font-weight: 600;
			text{
				font-size: 24rpx;
			}
		}
		.del-price{
			color: #666;
			font-weight: 600;
			font-size: 24rpx;
			text-decoration: line-through;
			margin-left: 4px;
		}
		.sale-num{
			color: #888;
			font-size: 24rpx;
			font-weight: normal;
			margin-bottom: 2px;
		}
	}
	.flex {
		display: flex;
	}

	.txt-line2{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>
