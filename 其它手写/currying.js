function currying(fn, ...args) {
	return (...rest) => fn.apply(null, [...args, ...rest])
}



function add(a, b, c, d) {
	//求和
	return a + b + c + d
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

let addCurry = curry(add)
console.log(addCurry(1)(2)(3, 10)) //15console.log(addCurry(1)(2)(3, 4, 5)())  //15console.log(addCurry(1)(2, 3, 4, 5)())  //15
// console.log(fn(5)(6))
