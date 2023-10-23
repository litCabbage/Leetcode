// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 示例 1：

// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶
// 示例 2：

// 输入：n = 3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶

// 提示：

// 1 <= n <= 45

// 递归
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	let d = {}
	function fn(n) {
		if (n === 1) return 1
		if (n === 2) return 2
		if (d[n]) return d[n]
		const r = fn(n - 1) + fn(n - 2)
		d[n] = r
		return r
	}
	return fn(n)
}

// for循环
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs1 = function (n) {
	let pre = 0,
		prepre = 0,
		r = 1
	for (let i = 1; i <= n; i++) {
		prepre = pre
		pre = r
		r = pre + prepre
	}
	return r
}

var climbStairs2 = function (n) {
	if (n === 1) return 1
	if (n === 2) return 2
	let pre = 0,
		prepre = 0,
		r = 1
	for (let i = 1; i <= n; i++) {
		prepre = pre
		pre = r
		r = pre + prepre
	}
	return r
}

var climbStairs3 = function (n) {
	let d = {}
	function fn(n) {
		if (n === 1) return 1
		if (n === 2) return 2
		if (d[n]) return d[n]
		const r = fn(n - 1) + fn(n-2)
		d[n] = r
		return r
	}
	return fn(n)
}

console.log(climbStairs(5))
console.log(climbStairs1(5))
