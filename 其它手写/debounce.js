function debounce(fn, delay) {
	let timer
	return  (...args) => {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			fn.apply(this, ...args)
			timer = null
		}, delay)
	}
}
// 第一次执行的debounce

function debounce (fn, delay, immidiate = false ) {
	let timer, result
	function debounced (...args) {
		const context = this
		if (timer) clearTimeout(timer)
		if (immidiate) {
			const callNow = !timer
			timer = setTimeout(() => {
				timer = null
			}, delay)
			if (callNow) {
				result = fn.apply(context, args)
			}
		} else {
			timer = setTimeout(() => {
				result = fn.apply(context, args)
				timer = null
			})
		}
		return result
	}
	debounced.canceled = () => {
		clearTimeout(timer)
		timer = null
	}
	return debounced
}
let i = 0
var fn = debounce(function () {
	console.log(111)
	return ++i
}, 3000, true)
let r

setInterval(() => {
	r = fn()
	console.log(r)
	if (r >= 5) {
		fn.canceled()
	}
}, 2000)