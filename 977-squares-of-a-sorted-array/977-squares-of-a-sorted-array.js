/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    //loop through the given array 
    for(let i = 0; i < nums.length; i++){
        //square each number at position i 
        nums[i] = nums[i] * nums[i];    
        
        
    }
    nums.sort((a,b) => a - b);
    
    //return sorted array at end
    return nums;
    
};