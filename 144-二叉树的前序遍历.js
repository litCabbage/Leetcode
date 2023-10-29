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
var preorderTraversal = function(root) {
	if (root === null) return []
const r = []
function accessTree(root, r) {
	if (root === null) return []
	r.push(root.val)
	accessTree(root.left, r)
	accessTree(root.right, r)
}
accessTree(root, r)
return r
};
var preorderTraversal = function(root) {
	if (root === null) return []
const r = [], stack = []
	while (root !== null || stack.length) {
			while (root !== null) {
					r.push(root.val)
					stack.push(root)
					root = root.left
			}
			root = stack.pop()
			root = root.right
	}
return r
};