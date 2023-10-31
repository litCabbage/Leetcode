function promiseChan(promises, initVal = undefined) {
	return promises.reduce((chan, item) => chan.then(item), Promise.resolve(initVal))
}
// Promise 函数 1
function p1(a) {
	return new Promise((resolve, reject) => {
		console.log(1)
		resolve(a * 5)
	})
}

// Promise 函数 2
function p2(a) {
	return new Promise((resolve, reject) => {
		console.log(2)
		resolve(a * 2)
	})
}

// 函数 3——将由 `.then()` 包装在已解决的 Promise 中
function f3(a) {
	console.log(3)
	return a * 3
}

// Promise 函数 4
function p4(a) {
	return new Promise((resolve, reject) => {
		console.log(4)
		resolve(a * 4)
	})
}

const promiseArr = [p1, p2,  p4, f3]

// promiseChan(promiseArr)
console.log(1)
Promise.resolve(2).then(() => {
	console.log(4)
})
console.log(3)