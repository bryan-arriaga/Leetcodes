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
    
    //create new list to hold merge of l1 and l2
    let merge = new ListNode(-1);
    let head = merge;
    
    
    //while loop to iterate through both l1 and l2
        while(l1 !== null && l2 !== null){
            //compare values and push lesser value of l1 and l2 to merged 
            if(l1.val < l2.val){
                merge.next = l1;
                l1 = l1.next
            } else {
                //move up list
                merge.next = l2;
                l2 = l2.next 
            }
    
            //move pointer to empty position in merged list
            merge = merge.next
        }
    
    
    //if one of the two list is not empty push the remainding nodes to merged list
    merge.next = l1 || l2;
    
    //return head of merged linked list
    return head.next;
    
};