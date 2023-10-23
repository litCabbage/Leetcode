// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。
// 穷举法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let r = []
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				r = [i, j]
				return r
			}
		}
	}
	return r
};
// hashmap存储
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
	let r = [],
		d = {}
	for (let i = 0; i < nums.length; i++) {
		let another = target - nums[i]
		if (d[another] !== undefined) {
			r = [d[another], i]
			return r
		} else {
			d[nums[i]] = i
		}
	}
	return r
};

var twoSum2 = function(nums, target) {
	let d = {}
	for (let i = 0; i < nums.length; i++) {
		let another = target - nums[i]
		if (d[another] !== undefined) {
			return [d[another], i]
		} else {
			d[nums[i]] = i
		}
	}
	return []
};

console.log(twoSum([2,7,11,15], 18))
console.log(twoSum1([2,7,11,15], 9))