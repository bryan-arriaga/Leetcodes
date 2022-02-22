/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    //sort given nums array
    nums.sort((a, b) => a - b);
    
    let triplets = [];
    
    //loop through given nums array
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        
        let right = nums.length - 1;
        let left = i + 1;
        let target = 0 - nums[i];
        
        
        while(left < right){
            let sum = nums[left] + nums[right];
            if(sum > target){
                right--;
            } else if(sum < target){
                left++;
            } else {
                triplets.push([nums[i], nums[left], nums[right]]);
                while(nums[left] === nums[left + 1]) left++;
                while(nums[right] === nums[right - 1])right--;
                left++;
                right--;
                
            }
        }
    }
    
    return triplets;
};