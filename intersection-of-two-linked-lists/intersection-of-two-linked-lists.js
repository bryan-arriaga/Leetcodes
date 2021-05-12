/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let a_node = headA;
    let b_node = headB;
    
    //while nodes are not the same traverse
    while(a_node !== b_node){
        
        //if a node points to null traverse b list else traverse otherwise
        if(a_node === null){
            a_node = headB;
        } else {    
            a_node = a_node.next;    
        }
        
        //if b node points to null traverse a list else traverse otherwise
        if(b_node === null){
            b_node = headA;
        } else {
            b_node = b_node.next;
        }
    
    
    }
    
    
    
    //return intersection at end
    return a_node;
    
};