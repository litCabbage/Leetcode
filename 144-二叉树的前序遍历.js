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
	while (root !== undefined || stack.length) {
			while (root !== undefined) {
					r.push(root.val)
					stack.push(root)
					root = root.left
			}
			root = stack.pop()
			root = root.right
	}
return r
};
const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 8,
      },
      right: {
        val: 9
      }
    },
    right: {
      val: 5,
      left: {
        val: 10,
      },
      right: {
        val: 11
      }
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: {
        val: 12
      }
    },
    right: {
      val: 7
    }
  }
}
console.log(preorderTraversal(tree))