/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;
    
    while(nums[left] + nums[right] !== target){
        if(nums[left] + nums[right] > target){
            right--;
        } else {
            left++
        }
    }
    
    
    return [left + 1, right + 1]
    
};