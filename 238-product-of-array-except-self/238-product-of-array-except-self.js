/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let answer = [];
    let multiplier = 1;
    
    for(let i = 0; i < nums.length; i++){
        answer[i] = multiplier
        multiplier *= nums[i];
    } 
    multiplier = 1;
    
    for(let i = nums.length -1; i >= 0; i--){
        answer[i] *= multiplier;
        multiplier *= nums[i];
    }
    
    return answer
    
    
    
};