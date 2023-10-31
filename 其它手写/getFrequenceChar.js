function getFrequenceChar(str) {
	let maxChar = ['', 0],
		dict = {}
	for (let char of str) {
		dict[char] = (dict[char] || 0) + 1
		if (dict[char] > maxChar[1]) {
			maxChar = [char, dict[char]]
		}
	}
	return maxChar
}
console.log(getFrequenceChar('aaaabb22223333333330000000000000'))
