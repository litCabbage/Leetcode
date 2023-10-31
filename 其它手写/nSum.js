function findSumNumbers(array, n, sum) {
	let result = []
	const generateAll = function(index, collection, arr) {
		if (collection.length === n) {
			const s = collection.reduce((acc, item) => acc + item, 0)
			if (s === sum) {
				result.push(collection)
			}
			return
		}
		for (let i = 0; i < arr.length; i++) {
			generateAll(index + 1, collection.concat(arr[i]), arr.slice(i + 1))
		}
	}
	generateAll(0, [], array.slice(0))
	return result
}
console.log(findSumNumbers([1, 0, -1, 0, -2, 2], 4, 0))