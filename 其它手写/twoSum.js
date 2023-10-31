function twoNum(arr, sum) {
	let o = {}, r = []
	for (let i = 0; i < arr.length; i++) {
		let another = sum - arr[i]
		if (o[another] !== undefined) {
			r.push([o[another], i])
		} else {
			o[arr[i]] = i
		}
	}
	return r
}

console.log(twoNum([1,2,3,4, 5, 6], 6))