// console.log(sum1(1, 22)(2)(100).valueof())
function sum(...args) {
	const f = (...rest) => sum(...args, ...rest)
	f.valueof = () => args.reduce((x, y) => x + y, 0)
	return f
}
function curry(fn) {
	return function curried(...args) {
		if (args.length === fn.length) {
			return fn.apply(null, args)
		} else {
			return function (...rest) {
				return curried.apply(this, [...args, ...rest])
			}
		}
	}
}
let add = (a,b,c) => a + b + c
const curryAdd = curry(add)
console.log(curryAdd(1)(2, 22))
console.log(sum(1, 22)(2).valueof())
