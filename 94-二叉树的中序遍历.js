// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
	if (root === null) return null
	const r = []
	function accessTree(root, r) {
		accessTree(root.left, r)
		r.push(root.val)
		accessTree(root.right, r)
	}
	accessTree(root, r)
	return r
};
// 循环
var inorderTraversal = function(root) {
	if (root === null) return null
	const r = [], stack = []
	while (root !== null || stack.length) {
		while (root !== null) {
			stack.push(root)
			root = root.left
		}
		root = stack.pop()
		r.push(root.val)
		root = root.right
	}
	return r
};