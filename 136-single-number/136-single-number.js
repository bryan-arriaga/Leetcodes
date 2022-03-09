/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let set = new Set();
    
    //iterate through given nums array
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        if(!set.has(num)){
            set.add(num);
        } else {
            set.delete(num);
        }
    }
    
    return [...set][0]
};