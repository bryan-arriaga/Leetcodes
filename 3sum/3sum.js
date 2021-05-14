/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    

    //sort array before traversal
    nums.sort((a , b) => a - b);
    
    let triplets = [];
    
    //iterate through nums
    for(let i = 0; i < nums.length; i++){
        
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        
        const target = 0 - nums[i]
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while(right > left){
            
            const sum = nums[left] + nums[right];
            
            if(sum > target){
                right--;
            } else if(sum < target){
                left++;
            } else {
                triplets.push([nums[i], nums[left], nums[right]]);
                
                //skip duplicates while iterating
                while(nums[left] === nums[left + 1]) left++;
                while(nums[right] === nums[right -1]) right--;
                left++;
                right--;
            }
        }

    }
    
    return triplets;
    
};