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
    
    //create new listnode to hold merged values of list1 and list2
    let merge = new ListNode(-1);
    let head = merge;
    
    
    //iterate through both list1 and list2
    while(l1 !== null && l2 !== null){
        //look at value of l1 and l2 push the lower value to new list 
        //move up l1/l2 to next pointer 
        if(l1.val < l2.val){
            merge.next = l1;
            l1 = l1.next
        } else {
            //repeat for vice versa of other list if it contains the lower value
            merge.next = l2;
            l2 = l2.next;
        }
        //move up merge to next pointer
        merge = merge.next;
        
    }
    

    
    
    //in case one of the lists is not empty push the nodes to merge
    merge.next = l1 || l2;
    
    
    
    
    
    //return head of merged lists
    return head.next;
    
};