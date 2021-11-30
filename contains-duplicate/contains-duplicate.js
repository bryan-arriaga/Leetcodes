/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    //test to see if nums is empty
    if(nums.length === 0) return false;
    
    //declare a obj to hold nums array values
    let map = {}
    
    //loop through nums 
    for(let i = 0; i < nums.length; i++){
        let number = nums[i];
        
        if(!map[number]){
            map[number] = 1;
        } else {
            map[number]++;
            return true;
        }
    }
        
    
    
    //return true at end
    return false;
    
};