<template>
	<view class="content">
		<view class="title">上传身份证</view>
		<view class="wrapper">
			<image class="bg" src="../static/front.png" mode="widthFix"></image>
			<view class="upload">
				<image class="upload-btn" src="../static/icon-photo.png"></image>
				<text class="upload-text">扫描或上传人像面</text>
			</view>
		</view>
		<view class="wrapper">
			<image class="bg" src="../static/after.png" mode="widthFix"></image>
			<view class="upload">
				<image class="upload-btn" src="../static/icon-photo.png"></image>
				<text class="upload-text">扫描或上传国徽面</text>
			</view>
		</view>
		<view class="desc">根据相关法律规定，需要通过实名认证才能进行 线上交易，您的证件信息我们将燕格格保密~</view>
		<button class="btn">下一步</button>
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
		width: 100%;
		background-color: #fff;
		padding: 0 117rpx 40rpx;
		border-top: 1rpx solid #838383;
		box-sizing: border-box;
		/* #ifdef h5 */
			min-height: calc(100vh - 44px);
		/* #endif */
		/* #ifdef MP-WEIXIN */
			min-height: 100vh;
		/* #endif */
		.title {
			padding: 48rpx 0 38rpx;
			font-size: 30rpx;
			color: #333;
			font-weight: bold;
		}
		.wrapper {
			position: relative;
			& + .wrapper {
				margin-top: 35rpx;
			}
			.bg {
				width: 515rpx;
			}
			.upload {
				position: absolute;
				z-index: 2;
				left: 50%;
				transform: translate(-50%);
				top: 82rpx;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				.upload-btn {
					width: 94rpx;
					height: 94rpx;
				}
				.upload-text {
					color: #fff;
					font-size: 24rpx;
					margin-top: 22rpx;
				}
			}
		}
		.desc {
			font-size: 24rpx;
			color: #ABABAB;
			margin: 38rpx 0 50rpx;
		}
		.btn {
			width: 235rpx;
			height: 72rpx;
			line-height: 72rpx;
			border-radius: 40rpx;
			background-image: linear-gradient(-50deg, #ff423a, #ff7f00);
			color: #fff;
			font-size: 36rpx;
			font-weight: bold;
		}
	}
</style>
