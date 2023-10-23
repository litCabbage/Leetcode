// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
// 示例 1:
// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 双指针，时间复杂度O(n)，空间O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let j = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[j++] = nums[i]
		}
	}
	while (j < nums.length) {
		nums[j++] = 0
	}
}
var moveZeroes1 = function (nums) {
	let j = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != 0) {
			nums[j++] = nums[i]
		}
	}
	for (; j < nums.length; j++) {
		nums[j] = 0
	}
}
let nums = [0,1,0,3,12]
moveZeroes1(nums)
console.log(nums)