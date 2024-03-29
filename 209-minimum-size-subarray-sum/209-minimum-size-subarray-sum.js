/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if(nums === null || nums.length <= 0) return 0;
    
    let left  = 0;
    let right = 0;
    let sum = 0;
    let min = Infinity;
    
    for(let i = 0; i < nums.length; i++){
        sum += nums[right];
        
        while(sum >= target){
            sum -= nums[left];
            min = Math.min(min, right - left + 1);
            left++;
        }
        right++;    
    }
    
    
    if(min === Infinity) return 0;
    
    return min
    
};