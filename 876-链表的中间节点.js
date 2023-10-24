/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
	if (head === null) return null
	let i = 0, p = head
	while (p !== null) {
			i++
			p = p.next
	}
	i = Math.floor(i / 2)
	let j = 0
	while (head !== null) {
			if (j === i) {
					return head
			}
			j++
			head = head.next
	}
};
// 快慢指针
var middleNode = function(head) {
	if (head === null) return null
	let fast = head, slow = head
	while (fast !== null && fast.next !== null) {
			fast = fast.next.next
			slow = slow.next
	}
	return slow
};