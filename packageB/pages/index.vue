<template>
	<view class="content">
		<view class="title">请选择你的实名方式</view>
		<view class="nav-wrap" @click="goPage('personal')">
			<image class="nav-item" src="../static/personal.png" mode="widthFix"></image>
		</view><view class="nav-wrap" @click="goPage('company')">
			<image class="nav-item" src="../static/company.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			goPage(path) {
				uni.navigateTo({
					url: `./${path}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background-color: #fff;
		/* #ifdef h5 */
			min-height: calc(100vh - 44px);
		/* #endif */
		/* #ifdef MP-WEIXIN */
			min-height: 100vh;
		/* #endif */
		.title {
			font-size: 36rpx;
			font-weight: bold;
			color: #333;
			line-height: 1;
			padding: 80rpx 0 66rpx;
			text-align: center;
			border-top: 1rpx solid #838383;
		}
		.nav-wrap {
			width: 690rpx;
			margin: 0 auto;
			& + .nav-wrap {
				margin-top: 26rpx;
			}
			.nav-item {
				width: 690rpx;
			}
		}
	}
</style>
