/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    

    //create a set to pass in unique values
    let uniqueSet = new Set();
    
    //iterate through given nums array
    for(let num of nums){
        //conditional if we find number that already exists delete that number from entirety of set
        //else add that unique value
        if(uniqueSet.has(num)){
            uniqueSet.delete(num);
        } else {
            uniqueSet.add(num);
        }
    }
    
        
        
        //return first index of unique set which will have answer
        return Array.from(uniqueSet)[0];
};