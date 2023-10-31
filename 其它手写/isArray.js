function isArray(arr) {
	return Object.prototype.toString.apply(arr, null).slice(8, -1) === 'Array'
}
function isArray(arr) {
	if (arr === null || typeof arr !== 'object') return false
	return arr instanceof Array
}
console.log(isArray([1,2]))