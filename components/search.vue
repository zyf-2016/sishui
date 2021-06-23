<template>
	<view class="search-bar" :class="{grey: grey}">
		<image class="search-icon" :src="grey?'/static/img/icon-search-grey.png':'/static/img/icon-search.png'" mode="aspectFill"></image>
		<input type="text" class="search-form" :class="{grey: grey}" placeholder="搜索你想要的宝贝" :placeholder-class="grey?'placeholder-grey':'placeholder'">
		<button class="search-btn">搜索</button>
	</view>
</template>

<script>
	export default {
		name:"search",
		props: ['grey'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.search-bar {
		position: relative;
		z-index: 2;
		width: 100%;
		height: 62rpx;
		border: 1rpx solid #fff;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 32rpx;
		margin: 0 auto;
		&.grey {
			background: rgba(175, 175, 175, 0.2);
			border: 1rpx solid #AFAFAF;
		}
		.search-icon {
			margin-left: 20rpx;
			width: 28rpx;
			height: 28rpx;
		}
		.search-form {
			flex: 1;
			padding: 0 10rpx;
			color: #fff;
			font-size: 24rpx;
			&.grey {
				color: #AFAFAF;
			}
		}
		.placeholder {
			color: #fff;
			font-size: 24rpx;
		}
		.placeholder-grey {
			color: #AFAFAF;
			font-size: 24rpx;
		}
		.search-btn {
			width: 158rpx;
			height: 62rpx;
			line-height: 62rpx;
			color: #fff;
			font-size: 26rpx;
			// background: #ff0;
			// border-radius: 60rpx;
			// background: url(/static/img/search-btn.png) no-repeat;
			// background-size: cover;
			background-image: linear-gradient(-50deg, #ff9122 , #fed500);
			outline: none;
			border: none;
			border-radius: 30rpx;
			&::after {
				display: none;
			}
		}
	}
</style>
