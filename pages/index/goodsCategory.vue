<template>
	<view class="category">
		<al-goods-list :data="goodsByCategory" clickUrl="/pages/show/show" :reflectKey="reflectKey"></al-goods-list>
	</view>
</template>

<script setup>
	import {ref,reactive,watchEffect} from 'vue'
	import {getGoods} from '@/apis/goods.js'
	const props = defineProps(['pid','page'])
	const goodsByCategory=reactive([])
	const reflectKey = ref({
		id: 'tao_id',
		image: 'main_image',
		price: 'coupon_price',
		delPrice: 'origin_price',
		coupon: 'coupon_amount',
		saleNum: 'volume',
		platform: 'shop_type'
	})
	watchEffect(async ()=>{
		await getGoodsList(props.pid,props.page)
	})
	/**
	 * 获取商品列表
	 * @param {Object} cid
	 */
	async function getGoodsList(cid,page=1){
		if(page==1){
			goodsByCategory.length=0
		}
		getGoods({cids:cid,page}).then(res=>{
			goodsByCategory.push(...res)
		})
	}
</script>

<style>
</style>