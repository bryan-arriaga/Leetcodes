/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let node = new ListNode(-1);
    node.next = head;
    
    let fast = node;
    let slow = node;
    
    while(fast.next !== null){
        fast = fast.next;
        
        if(n-- <= 0){
            slow = slow.next;
        }
    }
    
    slow.next = slow.next.next;
    return node.next;
    
};