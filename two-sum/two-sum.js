/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    
    //use a map for constant lookup time
    let map = new Map();
    
    //iterate through nums
    for(let index = 0; index < nums.length; index++){
    
        //define the compliment
        let compliment = target - nums[index];
        //return those given indices if target is found
        if(map.has(compliment)){
            //return array with those indices
            return [map.get(compliment), index];
        } else {
            //keep adding the values to map
            map.set(nums[index], index);
        }
    }
    
    
    
};