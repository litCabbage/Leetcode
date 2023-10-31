// 输入一个整数，如果能够被3整除，则输出 Fizz

// 如果能够被5整除，则输出 Buzz

// 如果既能被3整数，又能被5整除，则输出 FizzBuzz


function fizzbuzz(n) {
	let str = ''
	if (n % 3 === 0) {
		str = 'Fizz'
	}
	if (n % 5 === 0) {
		str += 'Buzz'
	}
	return str
}
console.log(fizzbuzz(15))
console.log(fizzbuzz(6))
console.log(fizzbuzz(5))