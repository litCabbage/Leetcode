// 给你一个二叉树的根节点 root ， 检查它是否轴对称。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
	if (root === null) return true
	function fn(left, right) {
			if (left === null && right === null) {
					return true
			} 
			if (left === null || right === null) {
					return false
			} 
			if (left.val !== right.val) {
					return false
			}
			return fn(left.left, right.right) && fn(left.right, right.left)
	}
	return fn(root.left, root.right)
};
var isSymmetric = function(root) {
	if (root === null) return true
	let l = root.left, r = root.right
	if (l === null && r === null) return true
	const queue = []
	queue.push(l)
	queue.push(r)
	while (queue.length) {
			l = queue.shift()
			r = queue.shift()
			if (l === null && r === null) {
					continue
			}
			if ((l === null || r === null) || l.val !== r.val) {
					return false
			}
			queue.push(l.left)
			queue.push(r.right)
			queue.push(l.right)
			queue.push(r.left)
	}
	return true
}