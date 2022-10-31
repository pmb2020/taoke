<template>
	<view class="discover">
		<view class="friend-list" v-for="(list,index) in lists" :key="index">
			<view class="friend-list-top">
				<view class="left">
					<image class="avatar" src="https://img.alicdn.com/i4/928746097/O1CN0189XBPI1uuTYuYH0cl_!!928746097.jpg"
						mode="widthFix"></image>
					<view class="userInfo">
						<text style="font-size: 32rpx;">淘客小管家</text>
						<text style="font-size: 28rpx;color: #888;margin-bottom: 10rpx;">12分钟前</text>
					</view>
				</view>
				<view class="right">
					赞125
				</view>
			</view>
			<view class="friend-list-title">
				{{list.title}}
			</view>
			<view class="main">
				<view class="image-box" v-for="(image,imagesIndex) in list.images" :key="imagesIndex">
					<image :src="image"></image>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {getFriendCircle} from '@/apis/common.js'
	export default {
		data() {
			return {
				pageSize:20,
				lists: []
			}
		},
		mounted() {
			getFriendCircle({pageSize:this.pageSize}).then(res=>{
				this.lists=res
				console.log(res)
				// this.handleListData(res)
			})
		},
		methods:{
			/**
			 * 处理列表数据
			 * @param {Object} data
			 */
			handleListData(data){
				for(let i=0; i<data.length; i++){
					let temp=data[i].shipaiPic
					data[i].images=temp.substring(1,temp.length-1).split(',')
					if(data[i].images.length%3 == 2){
						data[i].images.push('')
					}
				}
				this.lists=data
			}
		}
	}
</script>
<style lang="scss">
	.discover {
		padding: 20rpx;
		height: 100vh;
	}

	.friend-list {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 30rpx;
		border-radius: 5px;
		.main {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.image-box {
				width: calc(100%/3 - 2%);
				height: 230rpx;
				margin-bottom: 20rpx;
				uni-image {
					border-radius: 10px;
					height: 100%;
					width: 100%;
				}
			}
		}
	}
	.friend-list-top{
		margin-bottom: 20rpx;
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			.avatar{
				width: 130rpx;
				border-radius: 50%;
			}
			.userInfo{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 12rpx;
			}
		}
		.right{
			// background-color: #ccc;
			font-size: 28rpx;
			color: #666;
			height: 30rpx;
		}
	}
	.friend-list-title{
		margin-bottom: 30rpx;
		color: #333;
		font-size: 32rpx;
	}
</style>
