/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let maxSequence = 0;
    let left = 0;
    let right = 0;
    let set = new Set();
    
    while(right < s.length){
        if(!set.has(s.charAt(right))){
            set.add(s.charAt(right));
            right++;
            
            maxSequence = Math.max(maxSequence, set.size);
        } else {
            if(set.has(s.charAt(right))){
                set.delete(s.charAt(left));
                left++
            }
  
        }
    }
    
    return maxSequence;
    
};