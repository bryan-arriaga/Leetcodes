/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false;
    
    //create map for constant lookup time
    let map = new Map();
    
    //iterate through s and t passing letters to map
    
    for(let i = 0; i < s.length; i++){
        let letter = s[i];
        if(!map[letter]){
            map[letter] = 1;
        } else {
            map[letter]++;
        }
    }
    
    //iterate through t and compare letters to whats already inside map
    for(let i = 0; i < t.length; i++){
        let letter = t[i];
        if(!map[letter]){
            return false;
            map[letter] = 1;
        } else {
            map[letter]--;
        }
    }
    
    //return true at end
    return true
    
};