<template>
	<view class="person">
		<view class="person-top">
			<view class="al-flex">
				<image class="avatar" src="@/static/images/avatar-default.png" mode="widthFix"></image>
				<view v-if="userInfo.phone" class="info">
					<view class="name">{{userInfo.nickname || '用户'+userInfo.phone}}</view>
					<view class="code">邀请码：{{userInfo.phone}}</view>
				</view>
				<navigator v-else style="margin-left: 15px;" url="/pages/login/login">请先登录</navigator>
			</view>
			<view class="money-view">
				<view class="" @click="testfun">
					<view class="">0.00</view>
					<view class="">今日收益</view>
				</view>
				<view class="">
					<view class="">52.56</view>
					<view class="">昨日收益</view>
				</view>
				<view class="">
					<view class="">174.12</view>
					<view class="">累计收益</view>
				</view>
			</view>
		</view>
		<view class="al-box-title" style="margin: 0 20rpx;">
			<!-- <view class="title">我的订单</view> -->
			<view class="body">
				<uni-grid :column="4" @change="change" :showBorder="false" :square="false">
					<uni-grid-item v-for="(item,index) in orderNav" :index="index" :key="index">
						<view class="grid-item-box">
							<uni-icons custom-prefix="iconfont" :type="item.icon" size="30"></uni-icons>
							<text class="text">{{item.name}}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
		<view class="al-box-title" style="margin: 0 20rpx;margin-top: 50rpx;">
			<view class="title">更多服务</view>
			<view class="body">
				<uni-grid @change="moreChange" :column="5" :showBorder="false"  :square="false">
					<!-- <uni-grid-item>
						<view class="grid-item-box" style="margin: 0 20rpx;font-size: 24rpx;">
							<uni-icons custom-prefix="iconfont" type="icon-zuji2" size="30"></uni-icons>
							<text class="text">淘宝授权</text>
						</view>
					</uni-grid-item> -->
					<uni-grid-item v-for="(item,index) in moreNavs" :index="index" :key="index">
						<view class="grid-item-box" style="margin: 0 20rpx;font-size: 24rpx;">
							<uni-icons custom-prefix="iconfont" :type="item.icon" size="30"></uni-icons>
							<text class="text">{{item.name}}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref,reactive} from 'vue'
	import {onLoad,onShow,onPageScroll} from '@dcloudio/uni-app'
	import {getUserInfo,logout} from '@/apis/user.js'
    import { getStorage, getStorageSync } from '@dcloudio/uni-h5';
import _default from 'vuex';
	const orderNav = reactive([
		{name:'我的收益',icon:'icon-tixian',link:''},
		{name:'我的收藏',icon:'icon-shoucangshangpin',link:''},
		{name:'我的订单',icon:'icon-dingdanchaxun',link:'/pages/order/order'},
		{name:'我的团队',icon:'icon-tuandui',link:''},
	])
	const moreNavs = reactive([
		{name:'新手引导',icon:'icon-changyongqingdan',link:''},
		{name:'淘宝授权',icon:'icon-taobao',link:'/pages/auth/auth'},
		{name:'我的足迹',icon:'icon-zuji2',link:''},
		{name:'帮助中心',icon:'icon-bangzhuzhongxin',link:''},
		{name:'官方客服',icon:'icon-kefu1',link:''},
		{name:'下载APP',icon:'icon-xiazai1',link:''},
		{name:'意见反馈',icon:'icon-tuandui',link:''},
		{name:'注销',icon:'icon-tuichu',link:''},
	])
	const userInfo = ref({})
	onShow(()=>{
		userInfo.value = uni.getStorageSync('userInfo') || {}
		console.log(userInfo.value)
	})
	const testfun = ()=>{
		uni.showToast({
			title:'点击了测试'
		})
		uni.navigateTo({
			url:'/pages/auth/auth'
		})
	}
	const scrollTop = ref(0)
	const change = (e)=>{
		let {index} =e.detail
		console.log(index)
		if(orderNav[index].link){
			uni.navigateTo({
				url:orderNav[index].link
			})
		}
	}
	const moreChange = (e)=>{
		let {index} =e.detail
		console.log(index)
		switch(index){
			case 1 :
				toTbAuth()
				break
			case 7 :
				logoutFun()
				break
			default :
				if(moreNavs[index].link){
					uni.navigateTo({
						url:moreNavs[index].link
					})
				}
		}
		
	}
	//淘宝授权
	const toTbAuth = () =>{
		if(!userInfo.value.phone){
			uni.showToast({
				title:'请您先登录！',
				icon:'none'
			})
		}else if(userInfo.value.taobao_is_auth){
			uni.showToast({
				title:'您已经授权过啦！',
				icon:'none'
			})
		}else{
			uni.navigateTo({
				url:'/pages/auth/auth'
			})
		}
	}
	//注销登录
	const logoutFun = () =>{
		if(userInfo.value.phone){
			logout().then(res=>{
				userInfo.value={}
				uni.removeStorageSync('userInfo')
				uni.showToast({
					title:'注销成功',
					icon:'none'
				})
			})
		}else{
			uni.showToast({
				title:'您还未登录，无需注销',
				icon:'none'
			})
		}
	}
	onPageScroll((e)=>{
		scrollTop.value=e.scrollTop
	})
</script>

<style lang="scss">
	.person-top{
		color: #fff;
		position: relative;
		padding: 20rpx;
		height: 150px;
		padding-top: 50px;
		background-size: 100% 100%;
		background-image: url('@/static/images/me-bg.png');
		margin-bottom: 30rpx;
		overflow: hidden;
		.avatar{
			width: 130rpx;
			border-radius: 50%;
		}
		.info{
			margin-left: 5px;
		}
		.code {
			color: #fff;
			font-size: 24rpx;
			background-color: #2c64a2;
			padding: 8rpx 16rpx;
			border-radius: 20rpx;
			margin-top: 10rpx;
		}
		.bg-img{
			position: absolute;
			width: 250px;
			right: -2px;
			bottom: 0;
		}
	}
	.grid-item-box{
		margin: 0 20rpx;
		font-size: 24rpx;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 30rpx 0;
		color: #666;
		.text{
			margin-top: 10rpx;
		}
	}
	.money-view{
		font-size: 16px;
		display: flex;
		justify-content: space-between;
		text-align: center;
		margin: 50rpx 30rpx;
		color: #fff;
	}
</style>