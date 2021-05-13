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
    
    let firstList = headA;
    let secondList = headB;
    
    while(firstList !== secondList){
     
        if(firstList === null){
            firstList = headB;
        } else {
            firstList = firstList.next;
        }
        
        
        if(secondList === null){
            secondList = headA;
        } else {
            secondList = secondList.next;
        }
        
        
    }
    
    return firstList;
    
};