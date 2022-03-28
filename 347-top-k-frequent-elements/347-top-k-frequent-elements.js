/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let hash = {};
    
    for(let i  = 0; i < nums.length; i++){
        hash[nums[i]] = hash[nums[i]] + 1 || 1
    }
    let result = [];
    
    let keys = Object.keys(hash);
    
    keys.sort((a,b) => {
        return hash[a] - hash[b];
    })
    
    while(result.length < k){
        result.push(keys.pop());
    }
    
    return result
    
};