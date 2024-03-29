/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

    let answer = [nums.length];
    let left = 0;
    let right = nums.length - 1;
    
    for(let i = nums.length - 1; i >= 0; i--){
        if(Math.abs(nums[left]) < Math.abs(nums[right])){
            answer[i] = nums[right] ** 2;
            right--;
        } else {
            answer[i] = nums[left] ** 2;
            left++;
        }
    }
    
    return answer;
    
};