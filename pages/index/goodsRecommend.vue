<template>
	<view class="goods-Recommend">
		<view class="between-line" style="text-align: center;margin: 50rpx 0 30rpx 0;">
			<view class="line"></view>
			<text>精品推荐</text>
			<view class="line"></view>
		</view>
		<al-goods-list :data="list" clickUrl="/pages/show/show" :reflectKey="reflectKey"></al-goods-list>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,watchEffect
	} from 'vue'
	import {getGoods} from '@/apis/goods.js'
	const reflectKey = ref({
		id: 'tao_id',
		image: 'main_image',
		price: 'coupon_price',
		delPrice: 'origin_price',
		coupon: 'coupon_amount',
		saleNum: 'volume',
		platform: 'shop_type'
	})
	const list=reactive([])
	const props = defineProps(['page'])
	watchEffect(async ()=>{
		await getGoodsList(props.page)
	})
	async function getGoodsList(cid){
		getGoods({cids:cid}).then(res=>{
			list.push(...res)
		})
	}
</script>

<style>
	.goods-Recommend{
		margin-bottom: 30rpx;
	}
</style>
