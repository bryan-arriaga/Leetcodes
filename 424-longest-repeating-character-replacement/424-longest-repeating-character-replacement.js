/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    if(s.length <= 0 || s === null) return -1

    let left = 0;
    let right = 0;
    let maxFreq = 0;
    let answer = 0;
    
        
    let hash = {};
    
    for(let i = 0; i < s.length ; i++){
        hash[s[right]] = hash[s[right]] + 1 || 1;
        maxFreq = Math.max(maxFreq, hash[s[right]])
        
        
        while(right - left + 1 - maxFreq > k){
            hash[s[left]]--;
            left++;
        }
        answer = Math.max(answer, right - left + 1);
        right++;
        
    }
    
    return answer;
    
    
    
};