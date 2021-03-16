/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    //intialize set to hold only unique values
    let set = new Set();
    
    //create left and right variables set to 0
    //create count called maxSubstringLength starting at 0
    let left = 0;
    let right = 0;
    let maxSubstringLength = 0;
    
    
    //while loop to iterate through given s input
    while(right < s.length){
    
    //if we encounter a character thats not already in set then add it to set 
    //and increment right to move to next char in input
        if(!set.has(s.charAt(right))){
            set.add(s.charAt(right));
            right++;
            
            //use math.max to set maxSubStringLength to hold length of set or return 0 if given s string holds 0 unique char's
            maxSubstringLength = Math.max(maxSubstringLength, set.size);
        }
        //else if we do encounter a character that already exists in set then remove first letter from set and increment left to create 
        //new substring search
        else {
            if(set.has(s.charAt(right))){
                set.delete(s.charAt(left));
                left++;
            }
        
        }
    }
    
   
    
 
    
    //return maxSubstringLength which holds longest substring length w/o repeating char's
    return maxSubstringLength;
    
};