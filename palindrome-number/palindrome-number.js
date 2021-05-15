/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let reverse = x.toString().split('').reverse().join('');
    
    if(reverse == x) {
        return true;
    } 
    
    
    return false;
};