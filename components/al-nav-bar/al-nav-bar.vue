<template>
	<view>
		<uni-nav-bar statusBar :backgroundColor="bg" color="#fff" right-icon="chat" :border="false"
			leftWidth="90rpx" rightWidth="40rpx" fixed>
			<block v-slot:left>
				<text style="font-size: 30rpx;">慧慧购</text>
			</block>
			<view class="input-view">
				<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
				<input class="nav-bar-input" type="text" placeholder="输入搜索关键词" @click="toSearch" />
			</view>
		</uni-nav-bar>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const props = defineProps({
		bg:{
			type:String,
			default:'#8F4B2B'
		}
	})
	console.log(props.bg)
	const toSearch = () => {
		uni.navigateTo({
			url: '/pages/search/search'
		})
	}
</script>

<style lang="scss" scoped>
	$nav-height: 30px;

	.input-view {
		display: flex;
		flex-direction: row;
		flex: 1;
		background-color: #f8f8f8;
		height: $nav-height;
		border-radius: 15px;
		padding: 1px 15px;
		flex-wrap: nowrap;
		margin: 7px 0;
		line-height: $nav-height;
	}

	.input-uni-icon {
		line-height: $nav-height;
	}

	.nav-bar-input {
		height: $nav-height;
		line-height: $nav-height;
		width: 100%;
		padding: 0 5px;
		font-size: 14px;
		background-color: #f8f8f8;
	}
</style>
