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
    
    //iterate through list while either one is not empty
    while(l1 !== null && l2 !== null){
        
        //add smaller value to merge list looking at elements from l1 and l2
        if(l1.val < l2.val){
           merge.next = l1;
            l1 = l1.next;
        } else {
            merge.next = l2;
            l2 = l2.next;
        }
        //move up merge list to point a empty node 
        merge = merge.next;
    }
    
    //if either list was empty add the remainder of the other list to merge
    if(l1 !== null){
        merge.next = l1;
    } else {
        merge.next = l2;
    }
    
    //return merge list
    return head.next;
    
};