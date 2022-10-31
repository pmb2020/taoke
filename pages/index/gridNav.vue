<template>
	<view class="al-grid">
		<uni-grid :column="column" :highlight="true" :showBorder="false" @change="change">
			<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
				<view class="grid-item-box" style="background-color: #fff;">
					<image class="al-grid-image" :src="item.icon" mode="widthFix"></image>
					<text class="text">{{item.name}}</text>
				</view>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	export default {
		name: "al-grid",
		props: {
			column: {
				type: Number,
				default: 5
			},
			list: {
				type: Array,
				default: [{
						icon: '../../static/icons/taobao.png',
						name: '淘宝'
					},
					{
						icon: '../../static/icons/pinduoduo.png',
						name: '拼多多'
					},
					{
						icon: '../../static/icons/youxuan.png',
						name: '自营优选'
					},
					{
						icon: '../../static/icons/jingdong.png',
						name: '京东'
					},
					{
						icon: '../../static/icons/suning.png',
						name: '苏宁易购'
					},
					{
						icon: '../../static/icons/weipinhui.png',
						name: '唯品会'
					},
					{
						icon: '../../static/icons/baoyou.png',
						name: '9.9包邮'
					},
					{
						icon: '../../static/icons/meituan.png',
						name: '美团'
					},
					{
						icon: '../../static/icons/elm.png',
						name: '饿了么'
					},
					{
						icon: '../../static/icons/miaosha.png',
						name: '今日秒杀'
					},
				],
			}
		},
		data() {
			return {

			};
		},
		methods: {
			change(e) {
				let {
					index
				} = e.detail
				this.list[index].badge && this.list[index].badge++

				uni.showToast({
					title: `点击第${index+1}个宫格`,
					icon: 'none'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.al-grid {
		margin: 20rpx 0;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;

		.text {
			color: #666;
			font-size: 28rpx;
		}
	}

	.al-grid-image {
		width: 60rpx;
	}
</style>
