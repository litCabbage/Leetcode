function fibonacci(n) {
	if (n === 1 || n === 2) return 1
	let fib = [1, 1]
	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2]
	}
	return fib[n]
}
// 小于等于100的裴波纳契
function fib(n, ac1 = 1, ac2 = 1, acc = []) {
	if (ac2 > n) {
		return acc
	}
	acc.push(ac2)
	return fib(n, ac2, ac1 + ac2, acc)
}
console.log(fibonacci(100))
console.log(fib(100))