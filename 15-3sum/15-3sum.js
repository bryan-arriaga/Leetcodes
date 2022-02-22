/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    //sort given nums array
    nums.sort((a, b) => a - b);
    
    let triplets = [];
    
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        
        let target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        
        while(left < right){
            let sum = nums[left] + nums[right];
            if(sum < target){
                left++
            } else if(sum > target){
                right--;
            } else {
                triplets.push([nums[i], nums[left], nums[right]]);
                
                while(nums[left] === nums[left + 1])left++;
                while(nums[right] === nums[right - 1])right--;
                left++;
                right--;
            }
        }
    }
    
    return triplets;
    
};