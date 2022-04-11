/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let result = [];
    let multiplier = 1;
    
    for(let i = 0; i < nums.length; i++){
        result[i] = multiplier;
        multiplier *= nums[i];
    }
    
    multiplier = 1;
    
    for(let i = nums.length -1; i >= 0; i--){
        result[i] *= multiplier;
        multiplier *= nums[i];
    }

    return result;
};