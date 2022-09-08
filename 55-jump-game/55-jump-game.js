/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    let answer = nums.length - 1;
    
    //loop thorugh nums backwards starting at second to last position in arr
    for(let i = nums.length - 2; i >= 0; i--){
        if(i + nums[i] >= answer){
            answer = i
        }
    }
    if(answer === 0) return true;
    else return false
    

    
};