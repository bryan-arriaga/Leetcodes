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
        const temp = [];
        const numNodes = queue.length;
        for(let i = 0; i < numNodes; i++){
            const subTree = queue.shift();
            temp.push(subTree.val)
            if(subTree.left !== null) queue.push(subTree.left)
            if(subTree.right !== null) queue.push(subTree.right)
            
        }
        answer.push(temp);
        
    }
    
    return answer;
};