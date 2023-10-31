// hash
var getIntersectionNode = function (headA, headB) {
	if (headA === null || headB === null) return null
	const visited = new Set()
	let pA = headA, pB = headB
	while (pA !== null) {
		visited.add(pA)
		pA = pA.next
	}
	while (pB !== null) {
		if (visited.has(pB)) {
			return pB
		}
		pB = pB.next
	}
	return null
}
// 快慢指针
var getIntersectionNode = function (headA, headB) {
	if (headA === null || headB === null) return null
	let aNode = headA, bNode = headB
	// 相等于null或者某个节点
	while (aNode !== bNode) {
		aNode = aNode === null ? headB : aNode.next
		bNode = bNode === null ? headA : bNode.next
	}
	return aNode
}