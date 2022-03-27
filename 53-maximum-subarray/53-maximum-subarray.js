/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    if(nums.length === 0 || nums === null) return 0;
    
    let sum = 0;
    let maxSub = nums[0];
    
    for(let num of nums){
        if(sum < 0){
            sum = 0;
        }
        sum += num
        maxSub = Math.max(maxSub, sum)
    }
    
    return maxSub;
    
};