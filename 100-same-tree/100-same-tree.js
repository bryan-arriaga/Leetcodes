/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    //check if both p and q are null
    //return true
    if(!p && !q) return true
    
    //conditional if p or q dont exist
    //or if p's length !== q.length
    if(!p || !q || p.val !== q.val) return false;
    
    
    //return function call looking at all left nodes of p and q
    //and function call of all right nodes of p and q
    return isSameTree(p.left, q.left) && isSameTree(q.right, p.right);
    
};