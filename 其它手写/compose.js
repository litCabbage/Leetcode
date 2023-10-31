function compose (...fns) {
	// 从右往左计算
	return fns.reduce((f, g) => (...args) => f(g(...args)))
}


function compose (...fns) {
	return fns.reduce((f, g) => (...args) => g(f(...args)))
}

const fn1 = (x) => {
	console.log(111)
	return	x * 2
}
const fn2 = (y) => {
	console.log(222)
	return y;
}
const fn = compose(fn1, fn2)

console.log(fn(10))