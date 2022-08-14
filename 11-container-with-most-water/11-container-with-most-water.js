/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //i, j answer
    let i = 0; 
    let j = height.length - 1;
    let max = 0;
    
    while(i < j){
        
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        height[i] <= height[j] ? i++ : j--;
    }
    return max;
    
};