function instance(left, right) {
	let prototype = right.prototype
	while (left !== null) {
		if (left === prototype) {
			return true
		}
		left = left.__proto__
	}
	return false
}
function instance(left, right) {
	let prototype = right.prototype
	while (left !== null) {
		if (left === prototype) {
			return true
		}
		left = left.__proto__
	}
}
console.log(instance(null, Object))