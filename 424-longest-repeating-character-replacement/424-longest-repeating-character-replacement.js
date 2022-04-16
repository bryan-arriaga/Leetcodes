/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let right = 0;
    let left = 0;
    let max = 0;
    let maxFreq = 0;
    
    let hash  = {};
    
    for(let i = 0; i < s.length; i++){
        hash[s[right]] = hash[s[right]] + 1 || 1;
        
        maxFreq = Math.max(maxFreq, hash[s[right]]);
        while(right - left + 1 - maxFreq > k){
            hash[s[left]]--;
            left++
        }
        
        max = Math.max(max, right - left + 1);
        
        right++;
    }
    
    return max;
};