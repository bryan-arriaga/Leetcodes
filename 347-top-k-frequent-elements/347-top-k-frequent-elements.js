/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let map = {};
    let result = [];
    
    //loop through given nums and pass in key as # and value as frequency
    for(let i = 0; i < nums.length; i++){
       map[nums[i]] = map[nums[i]] + 1 || 1 
    }
    
    //make key variable pass in keys
    let keys = Object.keys(map);
    //sort keys
    keys.sort((a,b) => map[a] - map[b]);
    
    //while result length is less than k
    while(result.length < k){
        result.push(keys.pop());
    }
    
    return result
    
};