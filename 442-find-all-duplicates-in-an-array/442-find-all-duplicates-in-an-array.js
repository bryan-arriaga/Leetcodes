/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    
    let newArr = [];
    
    nums.sort((a,b ) => a - b);
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i -1]){
            newArr.push(nums[i]);
            i++
        }
    }
    
    
    return newArr;
};