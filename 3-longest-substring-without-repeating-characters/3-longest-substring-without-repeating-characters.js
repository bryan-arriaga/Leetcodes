/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    //create set to hold only unique values
    let set = new Set();
    let maxSubString = 0;
    
    //create two pointers
    let left = 0;
    let right = 0;
    
    //iterate through s while loop
    while(right < s.length){
        //if set does not have charAt() add to set
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
    
    
    //return maxSubString at end
    return maxSubString
    
};