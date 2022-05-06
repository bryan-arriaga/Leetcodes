/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right){
        let currSum = nums[left] + nums[right];
        if(currSum > target) right--
        else if(currSum < target) left++;
        else return [left + 1, right + 1];
    };
    
    return []
    
};