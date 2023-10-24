// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

// 示例 1：

// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"
// 示例 2：

// 输入：s = "3[a2[c]]"
// 输出："accaccacc"

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
	let numStack = [],
			strStack = [],
			num = 0,
			result = ''
	for (const char of s) {
			if (!isNaN(char)) {
					num = num * 10 + Number(char)
			} else if (char === '[') {
					numStack.push(num)
					strStack.push(result)
					num = 0
					result = ''
			} else if (char === ']') {
					result = strStack.pop() + result.repeat(numStack.pop())
			} else {
					result += char
			}
	}
	return result
};

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
	let stack = [],
		ptr = 0
	while (ptr < s.length) {
		let char = s.at(ptr)
		if (!isNaN(char)) {
			let num = getNum()
			stack.push(num)
		} else if (char !== ']' || char === '[') {
			stack.push(s[ptr++])
		} else {
			ptr++
			let tempStack = []
			while (stack[stack.length - 1] !== '[') {
				tempStack.push(stack.pop())
			}
			stack.pop()
			stack.push(tempStack.reverse().join('').repeat(stack.pop()))
		}
	}

	function getNum() {
		let num = '';
		while (!isNaN(s.at(ptr))) {
			num += s.at(ptr++)
		}
		return Number(num)
	}
	return stack.join('')
};

console.log(decodeString("3[a2[cd]]"))
