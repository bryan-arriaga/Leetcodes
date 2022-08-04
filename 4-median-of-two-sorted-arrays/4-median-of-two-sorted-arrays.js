/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    

    let answer = []

    while(nums1.length && nums2.length){
        answer.push(nums1[0] < nums2[0] ? nums1.shift() : nums2.shift());
    }
    
    if(nums1.length) answer.push(...nums1)
    if(nums2.length) answer.push(...nums2);
    
    let length = answer.length;
    
    if(length % 2){
        return answer[Math.floor(length / 2)];
    }
    
    return (answer[length / 2 - 1] + answer[length /2]) / 2;        
    


};