<script>
	export default {
		onLaunch: function() {
			console.log('我是App Launch')
		},
		onShow: function() {
			console.log('我是App Show')
		},
		onHide: function() {
			console.log('我是App Hide')
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #f3f3f3;
		height: 100%;
	}
	@import  '@/static/iconfont.css';
	@import '@/common/al-base.scss';
</style>
