/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length === 0 || nums === null) return 0;
    
    let min = Infinity;
    
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        min = Math.min(num, min)
    }
    
    return min;
    
    
};