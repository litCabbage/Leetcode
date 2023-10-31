function sleep(delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, delay)
	})
}
function delay(fn, seconds, ...args) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(fn(...args)), seconds)
	})
}
console.log(1)
;(async function () {
	await sleep(3000)
	console.log(2)
})()
console.log(3)
