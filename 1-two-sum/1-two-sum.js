/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        let answer = target - nums[i];
        if(map.has(answer)){
            return [map.get(answer), i]
        } else {
            map.set(nums[i], i);
        }
    
    }




};