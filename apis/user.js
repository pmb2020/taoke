import { myRequest } from "../utils/request.js"

export function login(params){
	return myRequest('/login',params,'POST')
}

export function getUserInfo(){
	return myRequest('/me')
}

export function logout(){
	return myRequest('/logout')
}