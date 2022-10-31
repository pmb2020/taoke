<template>
	<view class="meituan">
		<image src="@/static/images/mt-top.png" mode="widthFix" style="width: 100%;"></image>
		<view class="quan-box">
			<view class="quan-box-top">
				<view class="quan-box-item">
					<image src="@/static/images/quan-box-mt1.png" mode="widthFix"></image>
					<text>先领券</text>
				</view>
				<image class="quan-arrow" src="@/static/images/mt-arrow.png" mode="widthFix"></image>
				<view class="quan-box-item">
					<image src="@/static/images/quan-box-mt2.png" mode="widthFix"></image>
					<text>再下单</text>
				</view>
				<image class="quan-arrow" src="@/static/images/mt-arrow.png" mode="widthFix"></image>
				<view class="quan-box-item">
					<image src="@/static/images/quan-box-mt3.png" mode="widthFix"></image>
					<text>拿返利</text>
				</view>
			</view>
			<view class="quan-body">
				<image class="quan-code" show-menu-by-longpress src="@/static/images/mt-code.jpg" mode="widthFix"></image>
				<button class="quan-btn" @click="goto1()" style="background-color: #ff6100;" type="default">领红包点外卖</button>
				<button class="quan-btn" @click="goto2()" style="background-color: #fed001;color:009BFF;" type="default">领外卖红包②</button>
			</view>
		</view>
		<view class="notice-box">
			<text>注意事项：</text>
			<text>1、两个外卖红包不冲突，可以同时领取，可以哪个红包大，用哪个；</text>
			<text>2、无论新老客户都可以领取，并且每天可以领取一次，红包金额随机发放，有大有小；</text>
			<text>3、领券下单均有返利，返利按照订单实际支付金额为准；</text>
			<text>4、必须使用从本页面领取的优惠券下单后才会有返利；</text>
			<text>5、有任何问题可24小时随时联系客服解决。</text>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			//美团cps
			goto1(){
				// #ifdef MP-WEIXIN
				wx.navigateToMiniProgram({
					appId:'wxde8ac0a21135c07d',
					path:'/index/pages/h5/h5?f_userId=1&f_token=1&s_cps=1&weburl=https%3A%2F%2Fdpurl.cn%2FQeBGbGNz'
				})
				// #endif
				// #ifdef H5
				window.location.href='https://tb.j5k6.com/6W0rn'
				// #endif
			},
			//美团闪购
			goto2(){
				// #ifdef MP-WEIXIN
				wx.navigateToMiniProgram({
					appId:'wxde8ac0a21135c07d',
					path:'/index/pages/h5/h5?f_userId=1&f_token=1&s_cps=1&weburl=https%3A%2F%2Fdpurl.cn%2FreBDbGAz'
				})
				// #endif
				// #ifdef H5
				window.location.href='https://tb.j5k6.com/6W0EW'
				// #endif
			}
			
		}
	}
</script>

<style scoped>
	.meituan {
		background-color: #fdc414;
		padding-bottom: 150rpx;
	}
	
	.quan-box {
		background-color: #fff;
		margin:0 50rpx;
		border-radius: 20rpx;
	}
	
	.quan-box-top {
		display: flex;
		align-items: center;
		padding: 60rpx;
	}
	
	.quan-arrow {
		width: 60rpx;
		margin-bottom: 45rpx;
	}
	
	.quan-box-item {
		text-align: center;
	}
	
	.quan-box-item image {
		width: 80rpx;
	}
	
	.quan-box-item text {
		display: inline-block;
		font-size: 28rpx;
	}
	
	.quan-body {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding: 30rpx 50rpx;
		border: none;
		border-top: 1px dashed #009BFF;
		position: relative;
	}
	
	.quan-body::before {
		content: '';
		width: 25rpx;
		height: 50rpx;
		position: absolute;
		border: 1px solid #009BFF;
		border-radius: 0 20px 20px 0;
		border-left: 1px solid #009BFF;
		position: absolute;
		left: -2rpx;
		top: -30rpx;
		background-color: #009BFF;
	}
	.quan-body::after {
		content: '';
		width: 25rpx;
		height: 50rpx;
		position: absolute;
		border: 1px solid #009BFF;
		border-radius: 20px 0 0 20px;
		border-right: 1px solid #009BFF;
		position: absolute;
		right: -2rpx;
		top: -30rpx;
		background-color: #009BFF;
	}
	.quan-code {
		width: 350rpx;
		margin-bottom: 30rpx;
	}
	.meituan .quan-body{
		border-top: 1px dashed #fdc414;
	}
	.meituan .quan-body::before{
		background-color: #fdc414 !important;
		border: 1px solid #fdc414;
	}
	.meituan .quan-body::after{
		background-color: #fdc414 !important;
		border: 1px solid #fdc414;
	}
	.quan-btn {
		width: 90%;
		color: #FFFFFF !important;
		background-color: #009BFF;
		padding: 4rpx;
		border-radius: 50rpx;
		margin: 16rpx 0;
		border: 1px solid #009BFF;
	}
	.meituan .quan-btn{
		border: none;
	}
	.elm{
		background-color: #009bff;
		padding-bottom: 150rpx;
	}
	.notice-box{
		padding: 60rpx;
		padding-bottom: 0;
		font-size: 24rpx;
		color: #fff;
	}
	.notice-box text{
		display: block;
		margin-bottom: 16rpx;
	}
	.notice-box text:first-child{
		font-size: 28rpx;
	}
</style>
