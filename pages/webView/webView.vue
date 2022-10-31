<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	import {onLoad} from '@dcloudio/uni-app'
	const url = ref('')
	onLoad((options)=>{
		url.value=options.url
	})
</script>

<style>

</style>
