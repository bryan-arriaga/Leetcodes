/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let map = {};
    
    
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        if(!map[num]){
            map[num] = 1; 
        } else {
            map[num]++
            return true;
        }
    }
    
    return false;
    
};