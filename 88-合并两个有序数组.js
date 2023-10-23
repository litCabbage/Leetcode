// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
// 示例 1：
// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

// 暴力法，时间复杂度O((m+n)log(m+n))，空间复杂度O(log(m+n))
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	for (let i = 0; i < n; i++) {
		nums1[m + i] = nums2[i]
	}
	nums1.sort((a, b) => a - b)
}

// 双指针法，时间复杂度O(m+n)，空间复杂度O(m+n)，生成了一个m+n的数组
var merge1 = function (nums1, m, nums2, n) {
	let array = []
	for (let index = 0, nums1Index = 0, nums2Index = 0; index < m + n; index++) {
		if (nums1Index >= m) {
			array[index] = nums2[nums2Index++]
		} else if (nums2Index >= n) {
			array[index] = nums1[nums1Index++]
		} else if (nums1[nums1Index] > nums2[nums2Index]) {
			array[index] = nums2[nums2Index++]
		} else {
			array[index] = nums1[nums1Index++]
		}
	}
	for (let i = 0; i < m + n; i++) {
		nums1[i] = array[i]
	}
}
// 倒序双指针法，时间复杂度O(m+n)，空间复杂度O(1)
var merge2 = function (nums1, m, nums2, n) {
	let k = m + n
	for (let i = k - 1, nums1Index = m - 1, nums2Index = n - 1; i >= 0; i--) {
		if (nums1Index < 0) {
			nums1[i] = nums2[nums2Index--]
		} else if (nums2Index < 0) {
			nums1[i] = nums1[nums1Index--]
		} else if (nums1[nums1Index] > nums2[nums2Index]) {
			nums1[i] = nums1[nums1Index--]
		} else {
			nums1[i] = nums2[nums2Index--]
		}
	}
}
var merge3 = function (nums1, m, nums2, n) {
	let k = m + n
	for (let i = k - 1, nums1Index = m - 1, nums2Index = n - 1; i >= 0; i--) {
		if (nums1Index < 0) {
			nums1[i] = nums2[nums2Index--]
		} else if (nums2Index < 0) {
			nums1[i] = nums1[nums1Index--]
		} else if (nums1[nums1Index] < nums2[numsIndex]) {
			nums1[i] = nums2[nums2Index--]
		} else {
			nums1[i] = nums1[nums1Index--]
		}
	}
}
let nums1 = [0], m = 0, nums2 = [1], n = 1
merge2(nums1, m, nums2, n)
console.log(nums1)
