import { getToken } from "./auth"

const baseUrl = import.meta.env.VITE_BASE_URL

export const myRequest = (url,params={},method='GET')=>{
	//检测网络
	uni.getNetworkType({
		success: (res) => {
			if(res.networkType=='none'){
				// uni.navigateTo({
				// 	url:'/pages/index/noNet'
				// })
			}
		}
	})
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl+url,
			method:method,
			data: params,
			header:{
				'Authorization':'Bearer '+ getToken()
			},
			success: (res) => {
				if(res.data.code==0){
					resolve(res.data.data)
				}else if(res.data.code==10001){
					uni.removeStorageSync('userInfo')
				}else{
					uni.showToast({
						title:res.data.msg || 'http状态码：'+res.statusCode,
						icon:'none',
						duration:3000
					})
				}
			},fail: (err) => {
				uni.showToast({
					title:'服务器异常！',
					icon:'none',
					duration:3000
				})
				reject(err)
			}
		})
	})
}