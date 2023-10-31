
function getTwoMaxNum(arr) {
	if (!arr || !arr.length) return [0, 0]
	let maxNum = -Infinity,
		secondMaxNum = -Infinity
	for (let i = 0; i < arr.length; i++) {
		let val = arr[i]
		if (val > maxNum) {
			secondMaxNum = maxNum
			maxNum = val
		} else if (val > secondMaxNum) {
			secondMaxNum = val
		}
	}
	return [secondMaxNum, maxNum ]
}

console.log(getTwoMaxNum([1, 22, 33, 76, 9, 100]))