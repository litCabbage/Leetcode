function numberThounds(num) {
	let str, numArr = [], dotStr, r = '', arr = []
	numArr = `${num}`.split('.')
	dotStr = numArr[1] || ''
	str = numArr[0]
	while (str.length) {
		if (str.length > 3) {
			let newStr = str.slice(-3)
			arr.unshift(newStr)
			str = str.slice(0, -3)
		} else {
			arr.unshift(str)
			str = ''
		}
	}
	r = arr.join(',') + '.' + dotStr
	return r
}

console.log(numberThounds(100223333.0111))