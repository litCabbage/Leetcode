// 给定一个二叉树 root ，返回其最大深度。

// 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
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
 * @return {number}
 */
var maxDepth = function(root) {
	if (root === null) return 0
	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

var maxDepth = function(root) {
	if (root === null) return 0
	let depth = 0, queue = []
	queue.push(root)
	while (queue.length) {
			let size = queue.length
			while(size > 0) {
					let node = queue.shift()
					if (node.left !== null) {
							queue.push(node.left)
					}
					if (node.right !== null) {
							queue.push(node.right)
					}
					size--
			}
			depth++
	}
	return depth
};