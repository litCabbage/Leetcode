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
var postorderTraversal = function(root) {
	if (root === null) return []
	const r = []
	function accessTree(root, r) {
			if (root === null) return []
			accessTree(root.left, r)
			accessTree(root.right, r)
			r.push(root.val)
	}
	accessTree(root, r)
	return r
};

var postorderTraversal = function(root) {
	if (root === null) return []
	const r = [], stack = []
	let prevRoot = null
	while (root !== null || stack.length) {
			while (root !== null) {
					stack.push(root)
					root = root.left
			}
			root = stack.pop()
			if (root.right === null || root.right === prevRoot) {
					r.push(root.val)
					prevRoot = root
					root = null
			} else {
					stack.push(root)
					root = root.right
			}
	}
	return r
};