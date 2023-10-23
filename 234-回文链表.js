// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
// 要求时间复杂度O(n)，空间O(1)
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	let fast = head, slow = head
	while (fast !== null && fast.next !== null) {
		fast = fast.next.next
		slow = slow.next
	}
	// 奇数，121null，需要将slow朝后面挪一位，将2留给前半部分
	let reverseNode = null, next
	if (fast !== null) {
		slow = slow.next
	}
	while(slow !== null) {
		next = slow.next
		slow.next = reverseNode
		reverseNode = slow
		slow = next
	}
	fast = head
	while (reverseNode !== null) {
		if (fast.val !== reverseNode.val) {
			return false
		}
		fast = fast.next
		reverseNode = reverseNode.next
	}
	return true
};

// 双指针，数组
var isPalindrome = function(head) {
	const vals = []
    while (head !== null) {
        vals.push(head.val)
        head = head.next
    }
    for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
        if (vals[i] !== vals[j]) {
            return false
        }
    }
    return true
};