function getTopK(arr, n) {
	return arr.sort((a, b) => b - a).slice(0, n)
}
console.log(getTopK([1,2,3,4,5, 100], 3))