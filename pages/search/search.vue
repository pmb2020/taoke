<template>
	<view class="search">
		<view class="al-flex" style="padding-top: var(--status-bar-height);">
			<uni-easyinput class="input" v-model="keyWord" :inputBorder="false" focus trim="both" :styles="styles" prefixIcon="search" placeholder="搜索关键词" @confirm="toSearch()">
			</uni-easyinput>
			<view @click="toSearch" class="search-text">搜索</view>
		</view>
		<!-- 历史搜索 -->
		<view class="search-history">
			<view class="al-flex-between">
				<view class="">历史搜索</view>
				<view @click="delHistory">
					<uni-icons type="trash" size="22"></uni-icons>
				</view>
			</view>
			<view class="body">
				<text class="al-tag" v-for="(item,index) in historyKeywords" :key="index">{{item}}</text>
			</view>	
		</view>	
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyWord: '',
				styles: {
					color: '#666',
					borderColor: '#2979FF',
					borderRadius: '10px'
				},
				historyKeywords:['华伦天奴','运动鞋','苹果13']
			}
		},
		methods: {
			toSearch() {
				console.log('开始搜索了'+this.keyWord)
				uni.navigateTo({
					url:'/pages/goodsList/goodsList?keyWord='+this.keyWord
				})
			},
			delHistory(){
				uni.showModal({
					title:'提示',
					content:'确定要清除搜索历史吗',
					success:function(){
						this.historyKeywords=[]
						console.log(this.historyKeywords)
					}
				})
			},
			cancel() {
				console.log('取消变成搜索')
				return false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search{
		padding: 30rpx;
		font-size: 28rpx;
		background-color: #fff;
		height: 100vh;
		.input{
			border: 1px solid #ccc;
			padding: 0 10px;
			border-radius: 20px;
		}
	}
	.search-history{
		margin-top: 30rpx;
		.body{
			margin-top: 28rpx;
		}
	}
	.search-text{
		margin-left: 10rpx;
	}
</style>
