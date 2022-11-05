import { defineStore } from 'pinia';

export const useUserStore = defineStore('user',{
	state: ()=>{
		return{
			isLogin : Boolean(uni.getStorageSync('userInfo')),
			userInfo : uni.getStorageSync('userInfo') || null ,
			token : uni.getStorageSync('token') || '',
			age: 10,
		}
	},
	actions: {
		login(userInfo,token = ''){
			this.isLogin = true
			this.token = token
			uni.setStorageSync('userInfo',userInfo)
			uni.setStorageSync('token',token)
		},
		logOut(){
			this.isLogin = false
			uni.clearStorage();
		}
	}
})