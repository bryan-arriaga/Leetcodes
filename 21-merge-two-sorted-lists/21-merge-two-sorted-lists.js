/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let merge = new ListNode(-1);
    let temp = merge;
    
    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            temp.next = l1;
            l1 = l1.next
        } else {
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next;
        
    }
    
    
    temp.next = l1 || l2;
    
    //return merged list at end
    return merge.next;
    
    
};