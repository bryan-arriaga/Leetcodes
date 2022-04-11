/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false
    
    //create two maps to pass in values from s and t 
    let map = {};
    
    //second iteration of passing values to map
    for(let i = 0; i < s.length; i++){
        map[s[i]] = map[s[i]] + 1 || 1
    }
    
    for(let i = 0; i < t.length; i++){
        if(map[t[i]]){
            map[t[i]]--; 
        } else {
            map[t[i]]  = 1
            return false
        }
    }
    
    //return true at end
    return true;
    
};