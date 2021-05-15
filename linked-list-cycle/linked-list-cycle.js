/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    let node = head;
    
    let fast = node;
    let slow = node;
    
    while(fast!== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        
        if(fast === slow) return true;
    }
    
    return false;
    
};