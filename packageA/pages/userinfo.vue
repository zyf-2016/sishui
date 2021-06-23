<template>
	<view class="content">
		<view class="wrapper">
			<text class="label">头像</text>
			<view class="avatar-wrap">
				<image class="avatar"></image>
			</view>
		</view>
		<view class="wrapper">
			<text class="label">昵称</text>
			<view>
				<text class="nickname">12312321</text>
				<image class="icon-right" src="../static/icon-right.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="wrapper">
			<text class="label">性别</text>
			<view>
				<image class="icon-right" src="../static/icon-right.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="wrapper">
			<text class="label">个人简介</text>
			<view>
				<image class="icon-right" src="../static/icon-right.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		.wrapper {
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 34rpx 43rpx 34rpx 28rpx;
			margin-bottom: 18rpx;
		}
		.label {
			font-size: 30rpx;
			color: #333;
		}
		.avatar-wrap {
			width: 107rpx;
			height: 107rpx;
		}
		.avatar {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background-color: orange;
		}
		.nickname {
			font-size: 30rpx;
			color: #989898;
			margin-right: 30rpx;
		}
		.icon-right {
			width: 17rpx;
		}
	}
</style>
