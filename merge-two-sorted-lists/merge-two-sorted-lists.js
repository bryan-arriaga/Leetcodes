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
    
    //create new list to hold merged linked lists
    let merge = new ListNode(1);
    
    let head = merge;
    
    //loop through both lists as long as either lists are not null
    while(l1 !== null && l2 !== null){

        //push lesser value of l1 and l2 to merged list
        if(l1.val < l2.val){
            //move up next pointer for l1 or l2 after pushing
            merge.next = l1;
            l1 = l1.next
        } else {
            merge.next = l2;
            l2 = l2.next
        }
        
        //move merge pointer to empty node 
        merge = merge.next    
    }
    
    //push the rest of nodes into merge if either list is not empty
    if(l1 !== null){
        merge.next = l1;
    } else {
        merge.next = l2;
    }
    
    
    //return head of merged linked list
    return head.next;
    
};