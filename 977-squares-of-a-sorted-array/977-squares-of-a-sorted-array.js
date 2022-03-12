/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    if(nums.length <= 0) return nums;
    
    //loop through given nums array 
    //square each number at position i in array
    for(let i = 0; i < nums.length; i++){
        nums[i] = nums[i] * nums[i];
        
    }

    //sort array again (n log n) 
    nums.sort((a,b) => a - b);
    //return nums at end
    return nums;
    
};