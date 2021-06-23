<template>
	<view class="content">
		<view class="search-wrap" :style="{'padding': navHeight+'px 24rpx 46rpx'}">
			<search :grey="true"></search>
		</view>
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" tab-class="text-center text-grey bg-grey" select-class="text-orange"></wuc-tab>
		<swiper :style="{height: scrollHeight}" :current="TabCur" class="swiper row" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)" indicator-active-color="rgba(255,255,255,0)" @change="swiperChange">
		  <swiper-item v-for="(item,index) in tabList" :key="index">
			<view class="swiper-item">
				<view class="list-item">
					<view class="list-title">
						<text>我需要：影视后期</text>
						<text class="price">可议价</text>
					</view>
					<view class="desc">我需要后期制作</view>
					<view class="tag-list">
						<view class="tag">招标</view>
						<view class="tag">图片后期</view>
						<view class="tag">匹配中</view>
						<view class="tag">全国</view>
					</view>
				</view>
				<view class="list-item">
					<view class="list-title">
						<text>我需要：影视后期</text>
						<text class="price">可议价</text>
					</view>
					<view class="desc">我需要后期制作</view>
					<view class="tag-list">
						<view class="tag">招标</view>
						<view class="tag">图片后期</view>
						<view class="tag">匹配中</view>
						<view class="tag">全国</view>
					</view>
				</view>
			</view>
		  </swiper-item>
		</swiper>
	</view>
</template>

<script>
	import search from '@/components/search.vue'
	import WucTab from '@/components/wuc-tab/wuc-tab.vue'
	export default {
		data() {
			return {
				navHeight: 44,
				scrollHeight: 0,
				TabCur: 0,
				tabList: [
				    { name: '综合' },
				    { name: '最新' },
				    { name: '预算' },
				    { name: '筛选' },
				    { name: '关注' }
				]
			}
		},
		components: {
			search,
			WucTab
		},
		onLoad() {
			// #ifdef H5
				this.navHeight = 20
				this.scrollHeight = `calc(100vh - ${this.navHeight}px - 198rpx - 50px)`
			// #endif
			
			// #ifdef MP-WEIXIN
				let menuButtonObject = uni.getMenuButtonBoundingClientRect()
				let  { statusBarHeight } = uni.getSystemInfoSync()
				this.navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2
				this.scrollHeight = `calc(100vh - ${this.navHeight}px - 198rpx - ${menuButtonObject.top - statusBarHeight}px)`
			// #endif
		},
		methods: {
			swiperChange(e) {
			    let { current } = e.target;
			    this.TabCur = current;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		.search-wrap {
			background: #fff;
		}
		.list-item {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			background-color: #fff;
			padding: 20rpx 54rpx 16rpx 30rpx;
			.list-title {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #696969;
				font-size: 24rpx;
				font-weight: bold;
				background-color: #fff;
			}
			.price {
				color: #FF4B3F;
				font-size: 30rpx;
			}
			.desc {
				font-size: 20rpx;
				color: #B3B2B2;
				margin: 10rpx 0 34rpx;
			}
			.tag-list {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;
			}
			.tag {
				height: 24rpx;
				line-height: 24rpx;
				border: 1rpx solid #FF4B3F;
				font-size: 18rpx;
				padding: 0 8rpx;
				color: #FF4B3F;
				margin-right: 10rpx;
				border-radius: 8rpx;
				&:first-child {
					background-color: #F5E69B;
				}
			}
			& + .list-item {
				margin-top: 10rpx;
			}
		}
	}
</style>
