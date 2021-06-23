<script>
export default {
	onLaunch: function() {
		console.log('App Launch');

		// setTimeout(() => {
		// 	uni.setTabBarBadge({
		// 		index: 1,
		// 		text: '31'
		// 	});
		// 	uni.showTabBarRedDot({
		// 		index: 3
		// 	});
		// }, 1000);
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/* #ifdef H5 */
	uni-radio .uni-radio-input {
		width: 36rpx !important;
		height: 36rpx !important;
		border: 1rpx solid #666666 !important;
		box-sizing: border-box !important;
	}
	uni-radio .uni-radio-input.uni-radio-input-checked {
		border: none !important;
		background: url(./static/img/icon-radio-selected.png) no-repeat !important;
		background-size: cover !important;
	}
/* #endif */

/* #ifdef MP-WEIXIN */
	radio .wx-radio-input {
		width: 36rpx !important;
		height: 36rpx !important;
		border: 1rpx solid #666666 !important;
		box-sizing: border-box !important;
	}
	radio .wx-radio-input.wx-radio-input-checked {
		border: none !important;
		background: url(./static/img/icon-radio-selected.png) no-repeat !important;
		background-size: cover !important;
	}
/* #endif */
</style>
