<template>
	<view class="wrapper">
		<text class="label">{{title}}</text>
		<view class="flex">
			<input class="field" type="text" :placeholder="placeholder"
			 placeholder-class="placeholder" v-if="type=='input'" :value="value" @input="handleChange($event.target.value, name)">
			<template v-else-if="type == 'select'">
				<picker mode="selector" :range="list" :value="value" :range-key="rangekey" @change="handleChange($event.target.value, name)">
					<text class="picker-text" v-if="value && value >= 0">{{list[value][rangekey]}}</text>
					<text class="placeholder" v-else>请选择</text>
				</picker>
				
				<!-- <text class="placeholder">请选择</text> -->
				<image class="icon-right" src="/static/img/icon-right.png" mode="widthFix"></image>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true
			},
			placeholder: {
				type: String,
				default: '请输入'
			},
			type: {
				type: String,
				default: 'select'
			},
			value: {
				type: String,
				default: ''
			},
			name: {
				type: String
			},
			list: {
				type: Array,
				default: () => []
			},
			rangekey: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
			};
		},
		methods: {
			handleChange(val, name) {
				this.$emit('change', {val: val.toString(), name})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 34rpx 43rpx 34rpx 28rpx;
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
	.picker-text {
		font-size: 28rpx;
		color: #333333;
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
</style>
