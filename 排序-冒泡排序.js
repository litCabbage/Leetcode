function bubbleSort(nums) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length - i - 1; j++) {
			let temp
			if (nums[j] > nums[j + 1]) {
				temp = nums[j]
				nums[j] = nums[j + 1]
				nums[j + 1] = temp
			}
			console.log(nums)
		}
		console.log('---')
	}
	return nums
}

function bubbleSort(nums) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length - i - 1; j++) {
			let temp
			if (nums[j] > nums[j + 1]) {
				temp = nums[j]
				nums[j] = nums[j + 1]
				nums[j + 1] = temp
			}
		}
	}
	return nums
}
console.log(bubbleSort([1, 3, 2, 5, 0]))