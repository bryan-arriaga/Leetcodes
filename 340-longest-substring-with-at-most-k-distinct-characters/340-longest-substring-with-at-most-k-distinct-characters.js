/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    
    let left = 0;
    let right = 0;
    let counter = 0;
    let answer = 0;
    
    let hash = {};
    
    for(let i = 0; i < s.length; i++){
        if(!hash[s[right]]){
            hash[s[right]] = 1;
            counter++;
        } else {
            hash[s[right]]++;
        }
        
        while(counter === k + 1){
            hash[s[left]]--;
            if(hash[s[left]] === 0) counter--;
            left++;
        }
        answer = Math.max(answer, right - left + 1);
        right++;
        
    }
    
    return answer;
    
    
};