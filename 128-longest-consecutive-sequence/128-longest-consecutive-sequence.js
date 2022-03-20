/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    if(nums.length === 0 || nums === null) return 0;
    
    
    let set = new Set(nums);
    let max = 0;
    
    for(let num of set){
        if(set.has(num - 1)) continue;
        
        let currMax = 1;
        let currNum = num;
        
        while(set.has(currNum + 1)){
            currNum++;
            currMax++;

        }
        max = Math.max(max, currMax);
    }
    
    return max;
};