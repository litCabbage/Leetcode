// 给定一个二叉树，判断它是否是高度平衡的二叉树。
// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

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
var isBalanced = function(root) {
	if (root === null) return true
	function fn(root) {
			if (root === null) return 0
			let left = fn(root.left),
					right = fn(root.right)
			if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
					return -1
			}
			return Math.max(left, right) + 1
	}
	return fn(root) !== -1
};