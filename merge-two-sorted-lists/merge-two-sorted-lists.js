/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let merge = new ListNode(-1);
    let head = merge;

    
    while(l1 !== null && l2 !== null){
        
        if(l1.val < l2.val){
            merge.next = l1;
            l1 = l1.next;
        } else {
            merge.next = l2;
            l2 = l2.next
        }
        
        merge = merge.next
    }
    
    if(l1 !== null){
        merge.next = l1;
    } else {
        merge.next = l2;
    }
    
    
    return head.next;
};