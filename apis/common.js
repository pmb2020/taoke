import { myRequest } from "../utils/request.js"

// 分类
export function getCategories(params){
	return myRequest('/categories',params)
}

//轮播图
export function getBanners(params){
	return myRequest('/banners',params);
}

//商品列表
export function getGoods(params){
	return myRequest('/tb/goods',params);
}

// 每日爆款推荐
export function getDayBlast(params){
	return myRequest('/dayBlast',params)
}

// 朋友圈素材
export function getFriendCircle(params){
	return myRequest('/moments',params)
}

export function getOrder(params){
	return myRequest('/order',params)
}