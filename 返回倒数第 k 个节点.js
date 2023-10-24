/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
// 存hash
var kthToLast = function(head, k) {
	if (head === null) return null
	let vals = new Map(), node = head, i = 0
	while (node !== null) {
		vals.set(i++, node.val)
		node = node.next
	}
	return vals.get(vals.size - k)
};
// 存长度
var kthToLast = function(head, k) {
	if (head === null) return null
	let node = head, i = 0, j = 0
	while (node !== null) {
		i++
		node = node.next
	}
	while (head !== null) {
        if( i - j === k) {
            return head.val
        }
		j++
		head = head.next
	}
};
// 快慢指针
var kthToLast = function(head, k) {
	if (head === null) return null
	let fast = head, slow = head
    k = k - 1
    while (k > 0) {
        k--
        fast = fast.next
    }
    while (fast !== null && fast.next !== null) {
        fast = fast.next
        slow = slow.next
    }
    return slow.val
};