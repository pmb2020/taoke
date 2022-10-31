<template>
	<view class="test-nav" :style="{opacity:opacity,zIndex: opacity < 0.7 ? 100 : 90}">
		<view style="height: var(--status-bar-height);"></view>
		<view class="header-box">
			{{title}}
		</view>
		<!-- <uni-nav-bar title="导航栏组件"></uni-nav-bar> -->
	</view>
</template>

<script setup>
	import {ref,watch} from 'vue'
	const opacity = ref(0)
	const props = defineProps(['scrollTop','title'])
	console.log(uni.getSystemInfoSync())
	setTimeout(()=>{
		uni.setNavigationBarColor({
			frontColor:'#000000',
			backgroundColor:'rgb(248, 248, 248)'
		})
	},150)
	watch(()=>props.scrollTop,(n,o)=>{
		// console.log(n)
		if (n > 180) {
			opacity.value=1
		} else{
			opacity.value= n/180
		}
	})
</script>

<style>
	.test-nav{
		background-color: rgb(248, 248, 248);
		position: fixed;
		left: var(--window-left);
		right: var(--window-right);
		border-bottom-width:1rpx;
		border-bottom-style:solid;
		border-bottom-color:#eee;
	}
	.header-box{
		text-align: center;
		line-height: 58rpx;
		color: #333;
		box-sizing: border-box;
		overflow: hidden;
		padding: 14rpx 6rpx;
		font-size: 32rpx;
		z-index: 999;
		/* #ifdef H5 */
		line-height: 30px;
		padding: 7px 3px;
		font-size: 16px;
		font-weight: bold;
		/* #endif */
	}

</style>