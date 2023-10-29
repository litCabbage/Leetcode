var quickSort = function (nums) {
	if (nums.length <= 1) {
		return nums
	}
	let middleIndex = Math.floor(nums.length / 2),
		middleVal = nums.splice(middleIndex, 1)[0],
		leftArr = [],
		rightArr = []
	for (let i = 0; i < nums.length; i++) {
		let val = nums[i]
		if (val > middleVal) {
			rightArr.push(val)
		} else {
			leftArr.push(val)
		}
	}
	return quickSort(leftArr).concat(middleVal, quickSort(rightArr))
}
var quickSort = function (nums) {
	if (nums.length <= 1) return nums
	let middleIndex = Math.floor(nums.length / 2),
		middleVal = nums.splice(middleIndex, 1)[0],
		leftArr = [],
		rightArr = []
	for (let i = 0; i < nums.length; i++) {
		let val = nums[i]
		if (val > middleVal) {
			rightArr.push(val)
		} else {
			leftArr.push(val)
		}
	}
	return quickSort(leftArr).concat(middleVal, quickSort(rightArr))
}
let arr = quickSort([2, 11, 33, 98, 0, 1, 898, 110])
console.log(arr)