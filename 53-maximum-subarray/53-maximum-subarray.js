/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let max = -Infinity;
    let prev = 0;
    
    //loop through nums
    for(let i = 0; i < nums.length; i++){
        prev = Math.max(nums[i], nums[i] + prev);
        max = Math.max(max, prev)
    }
    //
    
    return max;
    
};