import { defineStore } from 'pinia';

export const useUserStore = defineStore('user',{
	state: ()=>{
		return{
			isLogin:false,
			age: 10
		}
	},
	actions: {
		updateLogin(value = false){
			this.isLogin = value
			this.age++
		}
	}
})