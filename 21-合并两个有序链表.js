// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	if (list1 === null) return list2
	if (list2 === null) return list1
	const prehead = new ListNode(-1)
	let prev = prehead
	while(list1 !== null && list2 !== null) {
		if (list1.val < list2.val) {
			prev.next = list1
			list1 = list1.next
		} else {
			prev.next = list2
			list2 = list2.next
		}
		prev = prev.next
	}
	if (list1 === null) {
		prev.next = list2
	}
	if (list2 === null) {
		prev.next = list1
	}
	return prehead.next
}

var mergeTwoLists1 = function (list1, list2) {
	if (list1 === null) return list2
	if (list2 === null) return list1
	const prehead = new ListNode(-1)
	let prev = prehead
	while (list1 !== null && list2 !== null) {
		if (list1.val < list2.val) {
			prev.next = list1
			list1 = list1.next
		} else {
			prev.next = list2
			list2 = list2.next
		}
		prev = prev.next
	}

	if (list1 === null) {
		prev.next = list2
	}
	if (list2 === null) {
		prev.next = list1
	}
	return prehead.next
}
// 递归
var mergeTwoLists2 = function (list1, list2) {
	if (list1 === null) return list2
	if (list2 === null) return list1
	if(list1.val < list2.val) {
		list1.next = mergeTwoLists2(list1.next, list2)
		return list1
	}
	list2.next = mergeTwoLists2(list1, list2.next)
	return list2
}