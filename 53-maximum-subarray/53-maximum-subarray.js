/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    if(nums.length === 0 || nums === null) return 0;
    
    let currSum = 0;
    let maxSub = nums[0];
    
    for(let num of nums){
        if(currSum < 0){
            currSum = 0;
        }
        currSum += num
        maxSub = Math.max(maxSub, currSum)
    }
    
    return maxSub;
    
};