<template>
	<view class="al-tabs" :style="{backgroundColor:bg,color:color}">
		<scroll-view class="al-tabs-scroll" scroll-x="true" :scroll-left="scrollLeft" scroll-with-animation>
			<view class="al-scroll-view">
				<view class="al-tab-item" v-for="(item,index) in list" :key="index" @click="clickTab(index)">
					<text v-if="currentIndex != index" class="name">{{item.name}}</text>
					<text v-else class="name tab-active" :style="{color:activeColor}">{{item.name}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
	import {ref,reactive,onMounted,watch,nextTick} from 'vue'
	const props=defineProps({
		list:Array,
		current:{
			type:Number,
			default:0
		},
		bg:{
			type:String,
			default:'transparent'
		},
		color:{
			type:String,
			default:'#fff'
		},
		activeColor:{
			type:String,
			default:'#fff'
		}
	})
	const currentIndex=ref(props.current)
	const scrollLeft=ref(0)
	const tabViewWidth=ref(0)
	const tabQueryInfo=ref({})
	const emits = defineEmits(['change'])
	watch(currentIndex,(newValue,oldValue)=>{
		currentIndex.value=newValue
		scrollByIndex()
	})
	onMounted(()=>{
		setTimeout(()=>{
			scrollInit()
		},1000)
	})
	const clickTab=(index)=>{
		currentIndex.value=index
		emits('change',index)
	}
	const scrollByIndex=()=>{
		let tabInfo=JSON.parse(JSON.stringify(tabQueryInfo.value))[currentIndex.value]
		if(tabInfo.left< tabViewWidth.value/2){
			scrollLeft.value=0
			return;
		}
		scrollLeft.value=tabInfo.left-tabViewWidth.value/2+tabInfo.width/2
	}
	const scrollInit=()=>{
		const query=uni.createSelectorQuery().in(this)
		query.selectAll('.al-tab-item').boundingClientRect(data=>{
			tabQueryInfo.value=data
		}).exec()
		query.select('.al-scroll-view').boundingClientRect(data=>{
			tabViewWidth.value=data.width
		}).exec()
	}
</script>

<style lang="scss" scoped>
	.al-tabs{
		border: none;
	}
	.al-tabs-scroll{
		white-space: nowrap;
	}
	.al-scroll-view{
		display: flex;
		align-items: center;
	}
	.al-tab-item{
		font-size: 28rpx;
		padding:20rpx 30rpx;
		.name{
			white-space: nowrap;
			padding: 10rpx 0;
			// padding: 10rpx 30rpx;
		}
		.tab-active{
			color: #fff;
			font-weight: 600;
			font-size: 110%;
			border-bottom: 2px solid #fff;
		}
	}
	// 隐藏scroll-view下的滚动条
	scroll-view ::v-deep ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
</style>