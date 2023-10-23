// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

// 双指针，到头了然后交换，这样总会有交集
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	if (headA === null || headB === null) return null
	let aNode = headA,
		bNode = headB
	// 要么相等于某个节点，或者相等于null
	while (aNode !== bNode) {
		aNode = aNode === null ? headB : aNode.next
		bNode = bNode === null ? headA : bNode.next
	}
	return aNode
}
// hash
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	if (headA === null || headB === null) return null
	let pA = headA, pB = headB
	const visited = new Set()
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
// 算出长度差，从长度相等的地方开始，时间O(m+n)，空间O(1)
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	let head1 = headA, head2 = headB, lA = 0, lB = 0, diff = 0
	while (head1 !== null) {
		lA++
		head1 = head1.next
	}
	while (head2 !== null) {
		lB++
		head2 = head2.next
	}
	if (lA > lB) {
		head1 = headA
		head2 = headB
		diff = lA - lB
	} else {
		head1 = headB
		head2 = headA
		diff = lB - lA
	}
	for (let i = 0; i < diff; i++) {
		head1 = head1.next
	}
	while (head1 !== null && head2 !== null) {
		if (head1 === head2) {
			return head1
		}
		head1 = head1.next
		head2 = head2.next
	}
	return null
}