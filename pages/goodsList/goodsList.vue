<template>
	<view class="goodsList">
		<al-goods-list :data="goodsByCategory.data" clickUrl="/pages/show/show" :reflectKey="reflectKey"></al-goods-list>
	</view>
</template>

<script setup>
	import {onLoad,onReady} from '@dcloudio/uni-app'
	import {ref,reactive,watchEffect} from 'vue'
	import {search} from '@/apis/goods.js'
	const goodsByCategory=reactive({data:[]})
	const reflectKey = ref({
		id: 'tao_id',
		image: 'main_image',
		price: 'coupon_price',
		delPrice: 'origin_price',
		coupon: 'coupon_amount',
		saleNum: 'volume',
		platform: 'shop_type'
	})
	onLoad((option)=>{
		toSearchGoods(option.keyWord)
	})
	const toSearchGoods = (keyword)=>{
		uni.showLoading({
			title:'加载中...'
		})
		search({keyword:keyword}).then(res=>{
			goodsByCategory.data=res
			uni.hideLoading()
		})
	}
</script>

<style>
</style>