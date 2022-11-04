<template>
	<view class="login">
		<view class="head">
			<text>嗨，</text>
			<text>欢迎您！</text>
		</view>
		<view class="form-box" style="margin-top: 100px;">
			<form @submit="loginSubmit">
				<view class="al-form-item">
					<uni-icons type="person" size="25"></uni-icons>
					<input class="input" required v-model="loginFrom.phone" placeholder="账号" maxlength="15" />
				</view>
				<view class="al-form-item">
					<uni-icons type="locked" size="25"></uni-icons>
					<input class="input" v-model="loginFrom.password" placeholder="密码" maxlength="30" password />
				</view>
				<button class="login-btn" form-type="submit">登 录</button>
			</form>
		</view>
		<view class="login-bottom">
			<navigator url="/pages/login/verifyCode">验证码登录</navigator>
			<navigator url="/pages/login/login">忘记密码？</navigator>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		login,
		getUserInfo
	} from '@/apis/user.js'
	import {
		setToken,
		getToken
	} from '@/utils/auth.js'
	const loginFrom = ref({
		phone: '17739028084',
		password: '123456'
	})
	const isLock = ref(false)
	const loginSubmit = (e) => {
		if(!loginFrom.value.phone || !loginFrom.value.password){
			uni.showToast({
				title:'账号或密码不能为空',
				icon:'none'
			})
		}
		if(!isLock.value){
			isLock.value = true
			login(loginFrom.value).then(res => {
				setToken(res.token)
				getUserInfo().then(res=>{
					uni.setStorageSync('userInfo',res)
					uni.showToast({
						title:'欢迎您！',
						icon:'success'
					})
					setTimeout(()=>{
						uni.switchTab({
							url: '/pages/person/person'
						})
					},1500)
				})
			})
			setTimeout(()=>{
				isLock.value = false
			},3000)
		}
		
	}
</script>

<style lang="scss">
	.form-box{
		
	}
	.al-form-item{
		color: #555;
		font-size: 32rpx;
		padding: 30rpx 0;
		display: flex;
		align-items: flex-end;
		border-bottom: 1rpx solid #e2e3eb;
		margin-bottom: 20rpx;
		.input{
			margin-left: 10px;
		}
	}
	.login {
		padding: 0 60rpx;
		padding-top: var(--status-bar-height);
		.head {
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding-top: 100rpx;
			color: #555555;
			font-size: 60rpx;
			font-weight: bold;
		}
	}
	.login-btn {
		margin-top: 80rpx;
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
	.login-bottom{
		display: flex;
		justify-content: space-between;
		margin-top: 30rpx;
		font-size: 26rpx;
		color: #493ec1;
	}
</style>
