/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    nums.sort((a, b) => a - b);
    
    let triplets = [];
    
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] === nums[i -1]) continue;
        
        let target = 0 - nums[i];
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while(right > left){
            let sum = nums[left] + nums[right];
            
            if(sum > target){
                right--;
            } else if(sum < target){
                left++;
            } else {
                triplets.push([nums[i], nums[left], nums[right]]);
                
                //while there are duplicates skip over them by incrementing left pointer/right pointer
                while(nums[left] === nums[left + 1]) left++;
                while(nums[right] === nums[right - 1]) right--;
                
                //increment/decrement pointers otherwise 
                left++;
                right--;
            }
        }
    }
    
    
    return triplets;
    
};