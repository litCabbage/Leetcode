function chunk(arr, size) {
	const r = []
	for (let i = 0; i < arr.length; i++) {
		let index = Math.floor(i / size)
		r[index] ??= []
		r[index].push(arr[i])
	}
	return r
}

console.log(chunk([1,3,4,5,6], 3))