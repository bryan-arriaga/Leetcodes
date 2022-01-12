/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


//start out with making function to only merge two linked lists
function mergeLists(a, b){
    let merge = new ListNode(-1);
    let temp = merge;
    
    // while loop to iterate through both lists    
    while(a !== null && b !== null){
        if(a.val < b.val){
            temp.next = a;
            a = a.next
        } else {
            temp.next = b
            b = b.next
        }
        temp = temp.next
    }
    
    if(a !== null){
        temp.next = a;
    } else if(b !== null){
        temp.next = b
    }
    
    return merge.next;
    
}




var mergeKLists = function(lists) {
    //edge case if lists length is 0
    if(lists.length === 0) return null;
    
    while(lists.length > 1){
        let a = lists.shift();
        let b = lists.shift();
        const h = mergeLists(a , b);
        lists.push(h)
    }
    
    
    //return merge at end 
    return lists[0];
};