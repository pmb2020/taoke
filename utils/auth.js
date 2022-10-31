export const setToken = (token)=>{
	uni.setStorageSync('token',token)
}

export const getToken = ()=>{
	return uni.getStorageSync('token') || ''
}