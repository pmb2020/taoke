<template>
	<view class="auth">
		<web-view @click="onMessage" :src="authUrl" @message="onMessage"></web-view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	
	const authUrl = ref('https://oauth.taobao.com/authorize?response_type=code&client_id=32568743&state=1212&view=wap&redirect_uri=')
	const userInfo = uni.getStorageSync('userInfo')
	authUrl.value += 'https://tao.gold404.cn/api/tb/auth?user_id='+userInfo.id
	const onMessage = (e)=>{
		// H5 暂不支持
		console.log(e)
		console.log('收到了啥消息')
		// uni.showToast({
		// 	title:e.detail.data,
		// 	icon:'none'
		// })
	}
	const pages = getCurrentPages()
	const page = pages[pages.length - 1];  
	console.log(page)
	getCurrentPages((e)=>{
		console.log(e)
	})
</script>

<style>

</style>
