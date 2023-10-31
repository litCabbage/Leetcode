function accessTree(tree) {
	let queue = [],
		r = []
	queue.push(tree)
	while (queue.length) {
		let node = queue.shift()
		if (node) {
			r.push(node.val)
			if (node.left) {
				queue.push(node.left)
			}
			if (node.right) {
				queue.push(node.right)
			}
		} 
	}
	return r
}
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
console.log(accessTree(tree))