<template>
	<view class="content">
		<view class="wrapper">
			<text class="label">主题类型</text>
			<view class="radio-wrap">
				<radio-group v-model="type" class="radio-group" @change="handleChange">
					<view>
						<radio class="radio" :id="'radio'+index" :value="item.value" :checked="type == item.value" v-for="(item, index) in typeList" :key="item.value">
							<label class="radio-text" :for="'radio'+index">{{item.label}}</label>
						</radio>
					</view>
				</radio-group>
			</view>
		</view>
		<cell title="企业名称" type="input" placeholder="请填写营业执照上的企业全称" name="name" v-model="name" @change="handleValChange"></cell>
		<cell title="信用代码" type="input" placeholder="13位或18位数字和大写字母" name="code" v-model="code" @change="handleValChange"></cell>
		<cell title="所在行业" :list="list" name="hangye" rangekey="value" v-model="hangye" @change="handleValChange"></cell>
		<cell title="企业规模"></cell>
		<cell title="所在职位"></cell>
		<button class="btn" @click="submit">提交</button>
	</view>
</template>

<script>
	import cell from '@/components/cell.vue'
	export default {
		data() {
			return {
				type: '1',
				name: '',
				code: '',
				hangye: '1',
				list: [
					{
						key: 'network',
						value: '互联网',
					},
					{
						key: 'solid',
						value: '实体业',
					}
				],
				typeList: [
					{
						label: '企业',
						value: '1',
					},
					{
						label: '个人',
						value: '2',
					},
					{
						label: '政府组织',
						value: '3',
					}
				]
			};
		},
		components: {
			cell
		},
		methods: {
			handleChange(e) {
				this.type = e.detail.value
			},
			handleValChange(data) {
				this[data.name] = data.val
			},
			submit() {
				uni.showToast({
					title: this.name,
					icon: 'none'
				})
			}
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
			margin-bottom: 8rpx;
			&:first-child {
				margin-bottom: 14rpx;
			}
		}
		.label {
			font-size: 30rpx;
			color: #333;
		}
		.placeholder {
			font-size: 28rpx;
			color: #BEBEBE;
			margin-right: 18rpx;
		}
		.icon-right {
			width: 17rpx;
		}
		.flex {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			flex: 1;
		}
		.field {
			width: 100%;
			text-align: right;
			color: #333;
			font-size: 28rpx;
		}
		.radio-group {
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
		.radio-text {
			color: #666666;
			font-size: 28rpx;
		}
		.radio + .radio {
			margin-left: 36rpx;
		}
		.btn {
			width: 702rpx;
			height: 74rpx;
			line-height: 74rpx;
			font-size: 36rpx;
			color: #fff;
			border-radius: 40rpx;
			background-image: linear-gradient(-40deg, #FF423A, #FF7F00);
			margin-top: 80rpx;
		}
	}
</style>
