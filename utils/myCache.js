/**
 * 封装的缓存类
 */
export default function myCache(key, value, seconds = 3600 * 24) {
	let nowTime = Date.parse(new Date()) / 1000;
	if (value) {
		let expire = nowTime + Number(seconds);
		uni.setStorageSync(key,JSON.stringify(value) + '@' +expire)
		console.log('已经把' + key + '存入缓存,过期时间为' + expire)
	} else if (key && !value) {
		let val = uni.getStorageSync(key);
		if (val) {
			// 缓存存在，判断是否过期
			let temp = val.split('@')
			// console.log(temp[2])
			if (!temp[1] || temp[1] <= nowTime) {
				uni.removeStorageSync(key)
				console.log(key + '缓存已失效')
				return '';
			} else {
				return JSON.parse(temp[0]);
			}
		}
	}

}
