/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let set = new Set();
    let left = 0
    let right = 0;
    let maxSubString = 0;
    
    while(right < s.length){
        if(!set.has(s.charAt(right))){
            set.add(s.charAt(right));
            right++;
            maxSubString = Math.max(maxSubString, set.size);
        } else {
            if(set.has(s.charAt(right))){
                set.delete(s.charAt(left));
                left++;
            }
        }
    }
    
    
    return maxSubString;
};