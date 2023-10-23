// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。
// 请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
// 示例 1：
// 输入：nums = [4,3,2,7,8,2,3,1]
// 输出：[5,6]

// 引入多余变量
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
	let temp = [],
		array = [],
		j = 0;
	for (let i = 0; i < nums.length; i++) {
		array[i] = i + 1
	}
	for (let i = 0; i < array.length; i++) {
		if (!nums.includes(array[i])) {
			temp[j++] = array[i]
		}
	}
	return temp
}

// 不引入多余变量
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers1 = function (nums) {
	let r = [], j = 0
	for (let i = 0; i < nums.length; i++) {
		let cur = nums[i] > 0 ? nums[i] : -nums[i]
		nums[cur - 1] = nums[cur - 1] > 0 ? -nums[cur - 1] : nums[cur - 1]
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			r[j++] = i + 1
		}
	}
	return r
}
// +n
var findDisappearedNumbers2 = function(nums) {
	const n = nums.length;
	for (const num of nums) {
			const x = (num - 1) % n;
			nums[x] += n;
	}
	console.log(JSON.stringify(nums))
	const ret = [];
	for (const [i, num] of nums.entries()) {
			if (num <= n) {
					ret.push(i + 1);
			}
	}
	return ret;
};
// 循环
var findDisappearedNumbers3 = function (nums) {
	let r = [], j = 0
	for (let num of nums) {
		let i = num > 0 ? num : -num
		nums[i - 1] = nums[i - 1] > 0 ? -nums[i - 1] : nums[i - 1]
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			r[j++] = i + 1
		}
	}
	return r
}
console.log(findDisappearedNumbers3([1, 1, 2, 1, 4]))
