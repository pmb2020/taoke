<template>
	<view class="content">
		<text class="title-tip">Enter a new 8-12 digit password</text>
		<view class="form-box">
			<view class="row-input">
				<text class="tip">{{password!=''?'New password':''}}</text>
				<view class="input-box">
					<input v-model="password" maxlength="12" password placeholder="New password"
						placeholder-class="placeholder" />
					<image mode="aspectFit" v-show="password==''?false:true" @click="close"
						src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a1714171-183a-4753-b538-8fabcab0d8b6/d9bc0367-60be-4380-805b-4b9b64aa1b06.png"></image>
				</view>
			</view>
			<view class="row-input">
				<text class="tip">{{password2!=''?'New password again':''}}</text>
				<view class="input-box">
					<input v-model="password2" maxlength="12" password placeholder="New password again"
						placeholder-class="placeholder" />
				</view>
			</view>
			<view class="login-btn">
				Sure
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password: "12345678910",
				password2: ""
			}
		},
		methods: {
			// 关闭
			close() {
				this.password = ""
			}
		}
	}
</script>

<style lang="scss">
	.content {
		padding: 120rpx 60rpx 0 60rpx;

		.title-tip {
			line-height: 80rpx;
			font-weight: bolder;
			color: #ced2e0;
			font-size: 30rpx;
		}

		.form-box {

			.row-input {
				display: flex;
				flex-direction: column;
				border-bottom: 1rpx solid #e2e3eb;
			}

			.tip {
				height: 40rpx;
				padding-top: 30rpx;
				font-size: 32rpx;
				color: #e2e3eb;
			}

			.input-box {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 600rpx;
				height: 100rpx;
				color: #8c8c8c;
				font-size: 40rpx;

				image {
					width: 40rpx;
					height: 40rpx;
				}

				.placeholder {
					color: #eaeaea;
					font-size: 35rpx;
				}

			}

			.login-btn {
				margin-top: 100rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100rpx;
				color: #FFFFFF;
				border-radius: 50rpx;
				font-size: 35rpx;
				background: linear-gradient(to right, #5633e3, #6368ea);
				box-shadow: 0rpx 10rpx 20rpx 0rpx rgba(98, 92, 236, 0.4);
			}
		}
	}
</style>
