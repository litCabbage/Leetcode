// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let preNode = new ListNode(null),
		curNode = head,
		next = null
	while (curNode !== null) {
		next = curNode.next
		curNode.next = preNode
		preNode = curNode
		curNode = next
	}
	return preNode
}
