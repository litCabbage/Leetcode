
function encode (str) {
	const arr = []
	let j = -1, lastChar
	for (const char of str) {
		if (lastChar === char) {
			arr[j][1]++
		} else {
			lastChar = char
			j++
			arr[j] = [char, 1]
		}
	}
	
	return arr.map(([x, y]) => {
		return x + y
	}).join('')
}

//=> a4b3c2

console.log(encode('aaaabbbcc'))
 
//=> a4b3a4

console.log(encode('aaaabbbaaaa'))
 
//=> a2b2c2
encode('aabbcc')