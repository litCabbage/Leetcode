function flat(arr, depth = 1) {
	if (depth === 0) return arr
	return arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? flat(item, depth - 1) : item), [])
}
const arr = [1,[2, [4]], 3]
console.log(flat(arr, 1))