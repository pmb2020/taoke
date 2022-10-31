import { myRequest } from "./request.js"

//轮播图
export function getBanners(params){
	return myRequest('/banners',params);
}

// 商品列表
export function getGoods(params){
	return myRequest('/goods',params);
}

//商品详情
export function getGoodsDetail(params){
	return myRequest('/goods/show',params)
}

//商品详情
export function transformLink(params){
	return myRequest('/taobao/goods/transformLink',params)
}

//相似推荐
export function getGoodsSimilar(params){
	return myRequest('/taobao/goods/similar',params)
}

// 每日爆款推荐
export function getGoodsRecommend(params){
	return myRequest('/dayBlast',params)
}

// 分类
export function getCategories(params){
	return myRequest('/categories',params)
}