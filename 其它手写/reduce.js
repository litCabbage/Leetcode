Array.prototype.myReduce = function (fn, initVal = undefined) {
	let r, hasInitVal = initVal !== undefined
	r = hasInitVal ? initVal : this[0]
	for (let i = hasInitVal ? 0 : 1; i < this.length; i++) {
		r = fn(r, this[i])
	}
	return r
}

let num=[12,3].myReduce((sum, item) => sum * item)
console.log(num)