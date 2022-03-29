/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    if(nums.length === 0 || nums === null) return 0;
    
    let result = [];
    
    let hash = {};
    
    for(let i = 0; i < nums.length; i++){
        hash[nums[i]] = hash[nums[i]] + 1 || 1;
    }
    
    let keys = Object.keys(hash);
    
    keys.sort((a,b) => hash[a] - hash[b]);
    
    while(result.length < k){
        result.push(keys.pop());
    }
    
    return result;
    
};