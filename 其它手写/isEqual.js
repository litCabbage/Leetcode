function isEqual(x, y) {
	if (x === y) {
		return true
	} else if (x !== null && typeof x === 'object' && y !== null && typeof y === 'object') {
		const keysX = Object.keys(x)
		const keysY = Object.keys(y)
		if (keysX.length !== keysY.length) {
			return false
		}
		for (let k of keysX) {
			if (!isEqual(x[k], y[k])) {
				return false
			}
		}
		return true
	} else {
		return false
	}
}
let a = {
	a: 2,
	b: {
		c: 3
	}
},
b = {
	a: 2,
	b: {
		c: 3
	}
}
console.log(isEqual(a, b))