// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	// 利用hash法
	let map = new Map()
	for (let str of strs) {
		let array = Array.from(str)
		let key = array.sort().join("")
		let list = map.get(key) ? map.get(key) : []
		list.push(str)
		map.set(key, list)
	}
	return [...map.values()]
}
