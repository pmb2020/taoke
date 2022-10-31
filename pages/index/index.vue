<template>
	<al-nav-bar bg="#962929"></al-nav-bar>
	<view style="padding: 0 20rpx;background-color: #962929;color: #fff;position: relative;border: none;">
		<al-tabs :list="tabList" :current="tabCurrent" @change="tabChange"></al-tabs>
	</view>
	<view v-if="tabCurrent==0" class="index">
		<view class="banner-box">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
				<swiper-item v-for="(item,index) in banners" :key="index">
					<view class="swiper-item">
						<image @click="bannerClick(index)" :src="item.image" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<uni-notice-bar scrollable showIcon :speed="60" :text="noticeText"></uni-notice-bar>
		<!-- 宫格导航 -->
		<gridNav></gridNav>
		<!-- 推荐 -->
		<goodsRecommend :page="page"></goodsRecommend>
	</view>
	<template v-else>
		<goodsCategory :pid="tabList[tabCurrent].p_id" :page="page"></goodsCategory>
	</template>
	<uni-load-more :status="moreStatus"></uni-load-more>
	<view style="height: 50px;"></view>
</template>

<script setup>
	import {ref,reactive} from 'vue'
	import {onLoad,onReady,onPullDownRefresh,onReachBottom} from '@dcloudio/uni-app'
	import {getBanners,getCategories} from '@/apis/common.js'
	import gridNav from './gridNav.vue'
	import goodsRecommend from './goodsRecommend.vue'
	import goodsCategory from './goodsCategory.vue'
	const banners = reactive([]);
	const noticeText = ref('这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏');
	const tabCurrent = ref(0)
	const tabList=reactive([])
	const page = ref(1);
	const moreStatus = ref('more');
	onLoad(()=>{
		console.log('获取到的剪切板')
		uni.getClipboardData({
			success: (res) => {
				console.log(res)
			},
			fail: (err) => {
				console.log(err)
			}
		})
	})
	onReady(() => {
		getCategories().then(res=>{
			res.unshift({"name":'首页'})
			tabList.push(...res)
		})
		getBanners().then(res => {
			banners.push(...res)
		})
	});
	const bannerClick = async(index)=>{
		// uni.showToast({
		// 	title:'点击了banner'+index
		// })
		uni.navigateTo({
			url:'/pages/webView/webView?url='+'http://jingpage.com/#/firstOrder?app_key=fkmmjp',
		})
	}
	const tabChange = (index)=>{
		tabCurrent.value=index
		page.value=1
	}
	onReachBottom(()=>{
		console.log('触底函数')
		moreStatus.value='loading' 
		page.value++
		console.log(page.value)
	})
	onPullDownRefresh(()=>{
		console.log('下拉刷新')
		setTimeout(()=>{
			uni.stopPullDownRefresh()
		},1000)
	})
</script>

<style lang="scss">
	.banner-box {
		padding: 20rpx;
		position: relative;
		.swiper-item {
			border-radius: 8px;
			overflow: hidden;
			image {
				width: 100%;
				border-radius: 8px;
			}
		}
	}
</style>
