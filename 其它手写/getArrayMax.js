function getMaxNum(arr) {
	return Math.max(...arr)
}

function getMaxNum(arr) {
	if (!arr || !arr.length) return 0
	return arr.reduce((x, y) => x > y ? x : y)
}

console.log(getMaxNum())