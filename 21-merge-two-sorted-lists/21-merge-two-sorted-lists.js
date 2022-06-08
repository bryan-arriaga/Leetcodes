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
    let head = merge;
    
    //while loop to iterate through l1 and l2 != null
    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        
        head = head.next
    }
    
   
    head.next = l1 || l2
    
    return merge.next;
    
};