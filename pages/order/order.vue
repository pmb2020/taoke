<template>
	<view class="order">
		<view class="order-tab">
			<view class="order-tab-item" @click="orderTabClick(index)" v-for="(item,index) in orderTabs" :key="index">
				<view class="name" :class="index==tabCurrent ? 'active' :'' ">{{item.name}}</view>
			</view>
		</view>
		<view class="order-list">
			<view class="order-item" v-for="(order,index) in orderList" :key="index" :index="index">
				<view class="order-item-top">
					<image class="image" :src="order.image" mode="widthFix"></image>
					<view class="right" style="flex: 1;width: 0;">
						<view class="title txt-line-2">{{order.title}}</view>
						<view style="margin-bottom: 10rpx;">店铺名称：{{order.shop_name}}</view>
						<!-- <view class="">{{order.tk_status}}</view> -->
						<view v-if="order.tk_status==3" class="al-tag" style="background-color: green;font-size: 10px;padding: 2px 10px;">已结算</view>
						<view v-else-if="order.tk_status==12" class="al-tag" style="background-color: #4949e3;font-size: 10px;padding: 2px 10px;">已付款</view>
						<view v-else-if="order.tk_status==14" class="al-tag" style="background-color: #137a8b;font-size: 10px;padding: 2px 10px;">已收货</view>
						<view v-else-if="order.tk_status==13" class="al-tag" style="background-color: #868689;font-size: 10px;padding: 2px 10px;">已失效</view>
						<view v-else class="al-tag">未知{{order.tk_status}}</view>
					</view>
				</view>
				<view class="order-item-section">
					<view class="item">
						<view>付款金额</view>
						<view class="order-num">{{order.pay_price}}</view>
					</view>
					<view class="item">
						<view>付款预估收入</view>
						<view class="order-num">{{order.pay_pre_amount}}</view>
					</view>
					<view class="item">
						<view>提成</view>
						<view class="order-num">{{order.tk_total_rate}}%</view>
					</view>
				</view>
				<view v-if="order.final_pay_price" class="order-item-section">
					<view class="item">
						<view>结算金额</view>
						<view class="order-num">{{order.final_pay_price}}</view>
					</view>
					<view class="item">
						<view>结算预估收入</view>
						<view class="order-num">{{order.pre_amount}}</view>
					</view>
					<view class="item">
						<view>技术服务费</view>
						<view class="order-num">{{order.alimama_share_fee || '-'}}</view>
					</view>
				</view>
				<view class="order-item-bottom">
					<view>{{order.tk_paid_time}}付款</view>
					<view v-if="order.tk_earning_time">{{order.tk_earning_time}}结算</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {getOrder} from '@/apis/common.js'
	import {ref,reactive,onMounted} from 'vue'
	const tabCurrent = ref(0)
	const orderTabs=reactive([
		{name:'全部',value:''},
		{name:'已付款',value:12},
		{name:'已结算',value:3},
		{name:'已失效',value:13},
	])
	const orderList = reactive([])
	const orderTabClick = (index)=>{
		tabCurrent.value=index
		orderList.length=0
		getOrderList(orderTabs[index].value)
	}
	onMounted(()=>{
		getOrderList()
	})
	const getOrderList = (status = null)=>{
		uni.showLoading({
			title:'加载中...'
		})
		getOrder({status}).then(res=>{
			orderList.push(...res.data)
			uni.hideLoading()
		})
	}
</script>

<style lang="scss">
	.order{
		padding: $al-page-padding;
	}
	.order-tab{
		display: flex;
		background-color: #fff;
		color: #666;
		border-radius: 4px;
		padding: 0 20rpx;
	}
	.order-num{
		color: #000;
		font-weight: bold;
		font-size: 16px;
	}
	.order-tab-item{
		padding: 20rpx;
		.name{
			position: relative;
		}
		.active{
			font-weight: bold;
			color: #962929;
		}
	}
	.order-list{
		margin-top: 20rpx;
	}
	.order-item{
		padding: 20rpx;
		background-color: #fff;
		margin-bottom: 20rpx;
		border-radius: 6px;
	}
	.order-item-top{
		display: flex;
		font-size: 12px;
		color: #888;
		margin-bottom: 30rpx;
		.image{
			width: 200rpx;
			height: 200rpx;
			border-radius: 3px;
			margin-right: 20rpx;
		}
		.title{
			font-size: 28rpx;
			color: #333;
			margin-bottom: 10rpx;
		}
	}
	.order-item-section{
		display: flex;
		color: #888;
		font-size: 14px;
		margin-bottom: 40rpx;
		.item{
			flex: 1;
		}
	}
	.order-item-bottom{
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		color: #888;
	}
</style>
