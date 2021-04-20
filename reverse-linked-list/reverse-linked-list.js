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
var reverseList = function(head) {

    //variables to reverse list initialized
    let node = head;
    let next = null;
    let prev = null;
    
    //iterate through linked-list
    while(node !== null){
        next = node.next;
        node.next = prev;
        
        prev = node;
        node = next;
    
    }
    
    //return reversed linked-list at end
    return prev;
};