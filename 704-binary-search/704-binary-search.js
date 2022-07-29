/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    
    
    while(left <= right){
        let middle = left + Math.floor(right - left / 2)
        if(nums[middle] === target) {
            return middle
        } else if(nums[middle] < target){
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    
    return -1
    
};