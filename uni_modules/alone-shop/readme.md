# alone-shop

alone商城系列组件（淘客版）：低耦合的商商城组件，导入之后可以直接找到uni_modules中对应的组件，然后复制到自己组件中当自己的。

商品列表组件（左图右文）：al-goods-list

商品详情组件：al-goods-detail

**tab滑动导航栏**

`<al-tabs :list="tabList" :current="tabCurrent" @change="tabChange"></al-tabs>`

**商品列表**

`<al-goods-list :data="goodsList" clickUrl="/pages/show/show" :reflectKey="reflectKey"></al-goods-list>`


**商品详情**

`<al-goods-detail :goodsDetail="goodsDetail" :images="swiperImg" interval="5000"></al-goods-detail>`



```
goodsList：数据列表
reflectKey：键值映射。
clickUrl:点击的时候跳转的链接，会自动拼接id参数
reflectKey:{
	image:'mainPic',
	price:'actualPrice',
	delPrice:'originalPrice',
	coupon:'couponPrice',
	saleNum:'monthSales',
	platform:'platform'
},
```


下面是添加下拉刷新和加载更多（列表组件）：

getGoodsList()是请求接口数据的方法

	
```
//下拉刷新
	onPullDownRefresh() {
		this.getGoodsList(1)
		setTimeout(() => {
			uni.stopPullDownRefresh()
		}, 3000)
	},
```


//滑到底加载更多，需pages.json配置onReachBottomDistance
```
	onReachBottom() {
		this.getGoodsList()
	},
```