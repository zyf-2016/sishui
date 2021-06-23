<template>
	<view class="page">
		<view class="content" :style="{'padding-top': navHeight+'px'}">
			<image class="bg" src="/static/img/home/bg.png"></image>
			<view class="main">
				<search></search>
				<view class="label-list">
					<view class="label-item" @click="goPage">视频拍摄</view>
					<view class="label-item" @click="gopath">活动直播</view>
					<view class="label-item">照片拍摄</view>
					<view class="label-item">影视后期</view>
				</view>
				
				<swiper class="swiper-wrap" indicator-color="#fff" indicator-active-color="#FF4B3F" :indicator-dots="true" :circular="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item>
						<image class="swiper-item" src="/static/img/home/avatar.png" mode="aspectFill"></image>
					</swiper-item>
					<swiper-item>
						<image class="swiper-item" src="/static/img/home/avatar.png" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
				
				<view class="grid-list">
					<view class="grid-item" v-for="(item, index) in navList" :key="index">
						<image class="grid-icon" :src="'/static/img/home/icon-grid'+index+'.png'" mode="aspectFill"></image>
						<text class="grid-text">{{item.text}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="active-list">
			<view class="active-item">
				<image class="thumbnail" src="/static/img/home/avatar.png" mode="aspectFill"></image>
				<view class="active-info">
					<view class="active-title">(3套方案)公司LOGO设计标志商标图标 英文字体LOGO设计</view>
					<view class="active-label">3套方案可选</view>
					<view class="active-detail">
						<view class="detail-left"><text>￥</text><text class="count">599</text><text>/改到满意为止</text></view>
						<view class="detail-right"><text>销量666</text><text class="score">评分4.9</text></view>
					</view>
					<view class="active-com">
						<text class="active-name">品物视觉设计 上海</text>
						<button class="active-btn">免费咨询</button>
					</view>
				</view>
			</view>
			<view class="active-item">
				<image class="thumbnail" src="/static/img/home/avatar.png" mode="aspectFill"></image>
				<view class="active-info">
					<view class="active-title">(3套方案)公司LOGO设计标志商标图标 英文字体LOGO设计</view>
					<view class="active-label">3套方案可选</view>
					<view class="active-detail">
						<view class="detail-left"><text>￥</text><text class="count">599</text><text>/改到满意为止</text></view>
						<view class="detail-right"><text>销量666</text><text class="score">评分4.9</text></view>
					</view>
					<view class="active-com">
						<text class="active-name">品物视觉设计 上海</text>
						<button class="active-btn">免费咨询</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import search from '@/components/search.vue'
export default {
	data() {
		return {
			navHeight: 44,
			navList: [
				{
					text: '视频拍摄',
					link: ''
				},
				{
					text: '照片拍摄',
					link: ''
				},
				{
					text: '活动直播',
					link: ''
				},
				{
					text: '影视后期',
					link: ''
				},
				{
					text: '平面设计',
					link: ''
				},
				{
					text: '器材租赁',
					link: ''
				},
				{
					text: '场地租赁',
					link: ''
				},
				{
					text: '模特演员',
					link: ''
				},
				{
					text: '电商设计',
					link: ''
				},
				{
					text: '更多服务',
					link: ''
				}
			]
		}
	},
	components: {
		search
	},
	onLoad() {
		// #ifdef H5
			this.navHeight = 20
		// #endif
		// #ifdef MP-WEIXIN
			let menuButtonObject = uni.getMenuButtonBoundingClientRect()
			let  { statusBarHeight } = uni.getSystemInfoSync()
			this.navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2
		// #endif
	},
	methods: {
		goPage() {
			uni.navigateTo({
				url: '/packageB/pages/index'
			})
		},
		gopath() {
			uni.navigateTo({
				url: '/packageA/pages/companyinfo'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	background: #fff;
	position: relative;
	z-index: 2;
	.bg {
		position: absolute;
		width: 100%;
		top: 0;
		z-index: 2;
	}
	.main {
		position: relative;
		z-index: 3;
		padding: 0 24rpx;
	}
	.label-list {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 24rpx;
		margin-bottom: 20rpx;
		.label-item {
			min-width: 136rpx;
			height: 40rpx;
			line-height: 38rpx;
			border-radius: 40rpx;
			text-align: center;
			font-size: 22rpx;
			color: #fff;
			background: rgba(255, 255, 255, .2);
			& + .label-item {
				margin-left: 16rpx;
			}
		}
	}
	.swiper-wrap {
		border-radius: 30rpx;
		overflow: hidden;
		height: 320rpx;
		.swiper-item {
			width: 100%;
			height: 320rpx;
			border-radius: 30rpx;
		}
	}
	.grid-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: flex-start;
		padding: 20rpx 0 6rpx;
		.grid-item {
			width: 20%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 22rpx;
		}
		.grid-icon {
			width: 88rpx;
			height: 89rpx;
		}
		.grid-text {
			color: #696969;
			font-size: 24rpx;
			line-height: 1;
			margin-top: 18rpx;
		}
	}
}
.active-list {
	.active-item {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background: #fff;
		padding: 16rpx 24rpx;
		margin-top: 16rpx;
		.thumbnail {
			width: 216rpx;
			height: 216rpx;
			margin-right: 16rpx;
		}
		.active-info {
			height: 216rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			flex: 1;
		}
		.active-title {
			color: #494949;
			font-size: 26rpx;
			font-weight: bold;
			line-height: 36rpx;
			overflow: hidden;
		    text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.active-label {
			height: 32rpx;
			line-height: 32rpx;
			border: 2rpx solid #FF4B3F;
			border-radius: 20rpx;
			padding: 0 12rpx;
			min-width: 130rpx;
			text-align: center;
			color: #FF4B3F;
			font-size: 18rpx;
		}
		.active-detail {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			.detail-left {
				font-size: 18rpx;
				color: #FF4B3F;
				display: flex;
				justify-content: flex-start;
				align-items: flex-end;
				font-weight: bold;
			}
			.count {
				font-size: 36rpx;
				line-height: 1;
				vertical-align: bottom;
			}
			.detail-right {
				font-size: 18rpx;
				color: #848484;
				display: flex;
				justify-content: flex-start;
				align-items: flex-end;
			}
			.score {
				font-size: 22rpx;
				margin-left: 15rpx;
			}
		}
		.active-com {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.active-name {
				color: #848484;
				font-size: 22rpx;
			}
			.active-btn {
				min-width: 128rpx;
				height: 36rpx;
				color: #fff;
				font-size: 20rpx;
				line-height: 36rpx;
				// background: url(../../../static/img/home/icon-zixun.png) no-repeat;
				// background-size: contain;
				background-image: linear-gradient(-50deg, #ff423a , #ff7f00);
				margin: 0;
				border-radius: 20rpx;
				&:after {
					display: none;
				}
			}
		}
	}
}
</style>
