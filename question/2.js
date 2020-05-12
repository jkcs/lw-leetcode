/**
 * 给出两个 非空 的链表用来表示两个非负的整数。
 * 其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 倒序相加向后进1
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    return addList(l1, l2, new ListNode(0))
};

function addList(l1, l2, tempNode) {
    if (!l1 && !l2 && !tempNode) return
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (tempNode ? tempNode.val : 0)
    if (sum > 9) { // 需要向后进位
        let individual = sum % 10
        let ten = parseInt(sum / 10)
        tempNode = new ListNode(individual)
        tempNode.next = new ListNode(ten)
    } else {
        tempNode = new ListNode(sum)
    }
    l1 = l1 ? l1.next : undefined
    l2 = l2 ? l2.next : undefined
    tempNode.next = addList(l1, l2, tempNode.next)
    return tempNode
}

function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// [5,6,4]

// console.log(addTwoNumbers(l1, l2));
// console.log(addTwoNumbers(new ListNode(5), new ListNode(5)));
// console.log(addTwoNumbers(new ListNode(1, new ListNode(8)), new ListNode(0)));
console.log(addTwoNumbers(new ListNode(0), new ListNode(7, new ListNode(3))));