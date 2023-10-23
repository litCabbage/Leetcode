/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 给你一个链表的头节点 head ，判断链表中是否有环。
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Floyford，快慢指针，解决环形问题，有环一定会相遇
var hasCycle = function (head) {
	if (head === null) return false
	let slowHead = head, fastHead = head
	while (fastHead.next !== null && fastHead.next.next !== null) {
		slowHead = slowHead.next
		fastHead = fastHead.next.next
		if (slowHead === fastHead) {
			return true
		}
	}
	return false
}
