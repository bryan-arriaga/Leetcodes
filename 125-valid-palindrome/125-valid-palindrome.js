/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    //make given string 's' completely lowercase
    //and regex to replace non-alphanumeric values 
    s = s.toLowerCase();
    s = s.replace(/[^A-Za-z0-9]/g, '');
    
    //define start and end of string 
    let start = 0;
    let end = s.length - 1;
    
    
    //iterate through string s input
    while(start < end){
        //if the first letter is not the same character in given string 
        //break out of loop and return false;
        if(s[start] !== s[end]) return false;
        
        //else keep iterating through checking every other character in string input
        start++;
        end--;
    }
    
    //return true at end if no edge case is found
    return true;
    
    
};