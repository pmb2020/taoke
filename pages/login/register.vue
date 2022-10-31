<template>
	<view class="content">
		<view class="head">
			<text>Hi,</text>
			<text>Welcome</text>
		</view>
		<view class="form-box">
			<view class="row-input">
				<text class="tip">{{phone!=''?'Phone number':''}}</text>
				<view class="input-box">
					<input v-model="phone" maxlength="11" placeholder="Phone number" placeholder-class="placeholder" />
					<image mode="aspectFit" v-show="phone==''?false:true" @click="close" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a1714171-183a-4753-b538-8fabcab0d8b6/d9bc0367-60be-4380-805b-4b9b64aa1b06.png"></image>
				</view>
			</view>
			<view class="row-input2">
				<text class="tip">{{code!=''?'Code':''}}</text>
				<view class="input-box">
					<input maxlength="6" v-model="code" placeholder="code" placeholder-class="placeholder" />
					<view class="code" @click="getCode">发生验证码</view>
				</view>
			</view>
			<view class="row-input">
				<text class="tip">{{password!=''?'Password':''}}</text>
				<view class="input-box">
					<input v-model="password" maxlength="18" placeholder="Password" password
						placeholder-class="placeholder" />
				</view>
			</view>
			<view class="login-btn">
				注 册
			</view>
		</view>
		<view class="menu-link">已有账号?<text @click="signIn">登录</text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: 12345678910,
				code: "",
				password: ""
			}
		},
		methods: {
			// 获取验证码
			getCode() {
				uni.showToast({
					title: "获取验证码"
				})
			},
			// 登录
			signIn() {
				uni.navigateTo({
					url: '/pages/login3/login'
				})
			},

			// 关闭
			close() {
				this.phone = ""
			}
		}
	}
</script>

<style lang="scss">
	.content {
		padding: 0 60rpx;

		.head {
			display: flex;
			justify-content: center;
			flex-direction: column;
			height: 250rpx;
			color: #555555;

			text {
				line-height: 100rpx;
				font-size: 60rpx;
				font-weight: bold;
			}
		}

		.form-box {
			padding-top: 100rpx;

			.row-input {
				display: flex;
				flex-direction: column;
				border-bottom: 1rpx solid #e2e3eb;
			}

			.row-input2 {
				width: 100%;
				display: flex;
				flex-direction: column;

				.input-box {
					width: 100%;

					input {
						width: 60%;
						padding: 28rpx 0rpx;
						border-bottom: 1rpx solid #e2e3eb;
					}

					.code {
						width: 40%;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 35rpx;
						height: 100rpx;
						border-radius: 50rpx;
						color: #FFFFFF;
						background: linear-gradient(to right, #5633e3, #6368ea);
						box-shadow: 0rpx 10rpx 20rpx 0rpx rgba(98, 92, 236, 0.4);
					}
				}
			}

			.placeholder {
				color: #eaeaea;
				font-size: 35rpx;
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
			}

			.login-btn {
				margin-top: 100rpx;
				font-size: 35rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100rpx;
				color: #FFFFFF;
				border-radius: 50rpx;
				background: linear-gradient(to right, #5633e3, #6368ea);
				box-shadow: 0rpx 10rpx 20rpx 0rpx rgba(98, 92, 236, 0.4);
			}
		}

		.menu-link {
			position: fixed;
			width: 750rpx;
			left: 0;
			bottom: 50rpx;
			display: flex;
			justify-content: center;
			font-size: 26rpx;
			color: #8c8c8c;
			font-weight: bold;

			text {
				margin-left: 20rpx;
				color: #555555;
			}
		}
	}
</style>
