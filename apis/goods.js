import { myRequest } from "../utils/request.js"

// 商品列表
export function getGoods(params){
	return myRequest('/dtk/goods',params);
}

// 搜索
export function search(params){
	return myRequest('/dtk/goods/search',params);
}

//商品详情
export function getGoodsDetail(params){
	console.log(params.id)
	return myRequest('/dtk/goods/'+params.id)
}

//转链
export function transformLink(params){
	return myRequest('/dtk/goods/kouLing',params)
}