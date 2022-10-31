<template>
	<view class="al-navbar" :style="{backgroundColor: bgColor}">
		<view class="input-box">
			<input class="input" @focus="searchFocus" type="text" value="" placeholder="搜索你喜欢的商品" placeholder-style="font-size: 14px" confirm-type="search" />
			<view class="input-icon">
				<uni-icons type="search" color="#555" size="18"></uni-icons>
			</view>
		</view>
		<view @click="rightClick" class="right">
			<uni-icons type="chat" color="#fff" size="28"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			goPage:'',
			bgColor:{
				type:String,
				default:'#fc4a17'
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			searchFocus(){
				if(this.goPage){
					uni.navigateTo({
						url:this.goPage
					})
				}
			},
			rightClick(){
				this.$emit('rightClick')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.al-navbar{
		display: flex;
		align-items: center;
		padding: 20rpx;
		background-color: #fc4a17;
		.right{
			margin-left: 5px;
		}
	}
	.input-box{
		flex: 1;
		font-size: 28rpx;
		position: relative;
		.input{
			background-color: #fff;
			font-size: 28rpx;
			border-radius: 32rpx;
			padding: 10rpx 60rpx;
		}
		.input-icon{
			position: absolute;
			top: 9px;
			left: 16rpx;
		}
	}
</style>
