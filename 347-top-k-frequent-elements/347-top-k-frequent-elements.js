/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let hash = {};
    
    for(let i = 0; i < nums.length; i++){
        hash[nums[i]] = hash[nums[i]] + 1 || 1;
    } 
    
    let result = [];
    let key = Object.keys(hash);
    
    key.sort((a,b)=> hash[a] - hash[b]);
    
    while(result.length < k){
        result.push(key.pop());
    }

    
    return result;
    
};