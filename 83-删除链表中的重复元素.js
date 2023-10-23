/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 循环
var deleteDuplicates = function(head) {
	if (head === null) return head
	let curNode = head
	while(curNode.next !== null) {
		if (curNode.val === curNode.next.val) {
			curNode.next = curNode.next.next
		} else {
			curNode = curNode.next
		}
	}
	return head
};
// 递归
var deleteDuplicates = function(head) {
	if (head === null || head.next === null) return head
	head.next = deleteDuplicates(head.next)
	return head.val === head.next.val ? head.next : head
};
var deleteDuplicates = function(head) {
	if (head === null) return head
	let curNode = head
	while (curNode.next !== null) {
		if (curNode.val === curNode.next.val) {
			curNode.next = curNode.next.next
		} else {
			curNode = curNode.next
		}
	}
	return head
};
console.log(deleteDuplicates(head))