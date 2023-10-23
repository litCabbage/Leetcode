/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 快慢指针
var detectCycle = function(head) {
	if (head === null) return head
  let slowHead = head, fastHead = head, loopExit = false
	while (fastHead.next !== null && fastHead.next.next !== null) {
		slowHead = slowHead.next
		fastHead = fastHead.next.next
		if (slowHead === fastHead) {
			loopExit = true
			break
		}
	}
	if (loopExit) {
		slowHead = head
		while (slowHead !== fastHead) {
			slowHead = slowHead.next
			fastHead = fastHead.next
		}
		return slowHead
	}

	return null
};
// hashMap
var detectCycle = function(head) {
	if (head === null) return head
	const visited = new Set()
	while (head !== null) {
		if (visited.has(head)) {
			return head
		}
		visited.add(head)
		head = head.next
	}
	return null
}