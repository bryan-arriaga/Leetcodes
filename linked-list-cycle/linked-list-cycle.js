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
    
    //edge case if list is empty
    if(head === null) return false;
    
    let fast = head;
    let slow = head;
    
    
    
    
    //iterate through linked list 
    while(fast !== null && fast.next !== null){
    
        
        fast = fast.next.next;
        slow = slow.next;
        
        //if fast pointer and slow pointer intersect in list return true
        if(fast === slow) {
            return true;
        }
    }
    
    //return false otherwise
    return false
    
    
};