<template>
	<view class="content">
		<image class="bg" src="/static/img/mine/bg.png" mode="aspectFill"></image>
		<view class="main">
			<view class="userinfo">
				<view class="avatar-wrap">
					<image class="avatar" src="/static/img/home/avatar.png" mode="aspectFill"></image>
				</view>
				<view class="userdetail">
					<text class="username">username</text>
					<view class="usersign">
						<image class="icon-edit" src="/static/img/mine/icon-pen.png" mode="aspectFill"></image>
						<text class="signtext">编辑你的个性签名</text>
					</view>
				</view>
				<view class="useredit" @click="goPage('/userinfo')">
					<image class="icon-edit" src="/static/img/mine/icon-edit.png" mode="aspectFill"></image>
				</view>
			</view>
			
			<view class="userdata">
				<view class="dataitem" v-for="(item, index) in dataList" :key="index">
					<text class="count">{{item.count}}</text>
					<text class="text">{{item.text}}</text>
				</view>
			</view>
			
			<view class="wrapper">
				<view class="title-wrap">
					<text class="title">我的订单</text>
					<text class="more">查看全部></text>
				</view>
				<view class="order-publish">
					<view class="order-avatar">
						<image src="" class="avatar"></image>
					</view>
					<view class="order-title">
						<text class="title">多模式自主择优选择</text>
						<text class="title">项目多人竞价，多方案多报价</text>
					</view>
					<button class="publish-btn">免费发布需求</button>
				</view>
			</view>
			
			<view class="wrapper">
				<view class="title-wrap">
					<text class="title">常用功能</text>
				</view>
				<view class="list">
					<view class="item" v-for="(item, index) in gridList" :key="index">
						<image class="icon" :src="'/static/img/mine/icon'+index+'.png'" mode="widthFix"></image>
						<text class="text">{{item.text}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [
					{
						count: 30,
						text: '我的收藏'
					},
					{
						count: 30,
						text: '我的关注'
					},
					{
						count: 30,
						text: '足迹'
					},
					{
						count: 30,
						text: '优惠券'
					},
				],
				gridList: [
					{
						text: '发票'
					},
					{
						text: '联系客服'
					},
					{
						text: '问题反馈'
					},
					{
						text: '帮助'
					},
					{
						text: '我的活动'
					},
					{
						text: '账户余额'
					},
					{
						text: '交易举报'
					}
				]
			}
		},
		methods: {
			goPage(path) {
				uni.navigateTo({
					url: '/packageA/pages/userinfo'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 100vh;
		background: #fff;
		.bg {
			width: 100%;
			height: 410rpx;
		}
	}
	.main {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		padding: 72rpx 24rpx 0;
		box-sizing: border-box;
		.userinfo {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			color: #fff;
			.avatar-wrap {
				width: 130rpx;
				height: 130rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: 20rpx;
				border-radius: 50%;
				background-color: #ffa050;
			}
			.avatar {
				width: 110rpx;
				height: 110rpx;
				border-radius: 50%;
			}
			.userdetail {
				display: flex;
				flex-direction: column;
				flex: 1;
				.username {
					font-size: 38rpx;
					margin-bottom: 14rpx;
				}
				.usersign {
					font-size: 24rpx;
				}
				.signtext {
					opacity: .8;
				}
				.icon-edit {
					width: 20rpx;
					height: 20rpx;
					margin-right: 10rpx;
				}
			}
			.useredit {
				width: 35rpx;
				height: 35rpx;
				.icon-edit {
					width: 100%;
					height: 100%;
				}
			}
		}
		
		.userdata {
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin-top: 38rpx;
			.dataitem {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: #fff;
				.count {
					font-size: 30rpx;
					margin-bottom: 10rpx;
					line-height: 1;
					margin-bottom: 10rpx;
				}
				.text {
					font-size: 24rpx;
				}
			}
		}
		.wrapper {
			width: 702rpx;
			background: #FFFFFF;
			box-shadow: 0px 5rpx 16rpx 0 rgba(6, 0, 1, 0.1);
			border-radius: 10rpx;
			margin-top: 24rpx;
			& + .wrapper {
				margin-top: 30rpx;
			}
		}
		.title-wrap {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 26rpx 0 30rpx;
			height: 76rpx;
			border-bottom: 1rpx solid #DCDCDC;
			.title {
				font-size: 30rpx;
				color: #666666;
				font-weight: bold;
			}
			.more {
				font-size: 24rpx;
				color: #666666;
			}
		}
		.order-publish {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: 24rpx 22rpx 30rpx 28rpx;
			.order-avatar {
				width: 100rpx;
				height: 100rpx;
				margin-right: 16rpx;
				.avatar {
					border-radius: 50%;
					width: 100%;
					height: 100%;
					background-color: orange;
				}
			}
			.order-title {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				flex: 1;
				.title {
					font-size: 24rpx;
					color: #333333;
					& + .title {
						margin-top: 16rpx;
						font-weight: bold;
					}
				}
			}
			.publish-btn {
				width: 190rpx;
				height: 50rpx;
				line-height: 48rpx;
				border: 1rpx solid #FF461D;
				font-size: 24rpx;
				border-radius: 30rpx;
				background: #FFFFFF;
				color: #FF461D;
				padding: 0;
			}
		}
	
		.list {
			padding: 58rpx 0 10rpx;
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			flex-wrap: wrap;
			.item {
				margin-bottom: 50rpx;
				width: 25%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.icon {
					width: 36rpx;
					margin-bottom: 18rpx;
				}
				.text {
					font-size: 24rpx;
					color: #333;
					line-height: 1;
				}
			}
		}
	}
</style>
