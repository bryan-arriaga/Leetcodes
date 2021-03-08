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
var addTwoNumbers = function(l1, l2) {
    
    //initialize vars to be used
    let carry = 0;
    let head = new ListNode(0);
    let node = head;
    

    //start out by traversing linked list 
    while(l1 || l2){
        
        //add the values of each node from each list
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;
        
        //define sum to hold sum of each node
        let sum = l1Value + l2Value + carry 
        carry = 0;
        let newValue = sum;
        
        
        
        //if sum from two nodes is greater than 9 
        if(sum > 9){
            newValue = sum % 10;
            carry = 1;
        }
        
        node.next = new ListNode(newValue);
        node = node.next
        
        //traversing l1 list
        if(l1){
            l1 = l1.next;
        }
        
        //traversing l2 list
        if(l2){
            l2 = l2.next;
        }
    }
    
    
    if(carry){
        node.next = new ListNode(carry);
    }
    
    //return head at end which holds sum of both linked list
    return head.next
};