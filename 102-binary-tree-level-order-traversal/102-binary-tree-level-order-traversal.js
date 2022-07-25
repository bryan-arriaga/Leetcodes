/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    let answer = [];
    let queue = [root];
    
    while(queue.length){
        const levels = [];
        const numNodes = queue.length;
        for(let i = 0; i < numNodes; i++){
            const subTree = queue.shift();
            levels.push(subTree.val);
            if(subTree.left) queue.push(subTree.left);
            if(subTree.right) queue.push(subTree.right);
            
        }
        answer.push(levels)
    }
    
    return answer;
};