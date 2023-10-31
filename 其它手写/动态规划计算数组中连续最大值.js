const getMax = nums => {
	let dp = Array(nums.length)
	dp[0] = nums[0]
	for (let i = 1; i < nums.length; i++) {
		dp[i] = dp[i - 1] > 0 ? nums[i] + dp[i - 1] : nums[i]
	}
	console.log(dp)
	return Math.max(...dp)
}
let nums = [-2,1,-3,4,-1,2,1,-5,4];
// [-2, 1, -2, 4, 3, 5, 6, 1, 5]
console.log(getMax(nums))