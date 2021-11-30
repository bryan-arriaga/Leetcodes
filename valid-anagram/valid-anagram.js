/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    
    //test to see if both s and t are the same length return false
    if(s.length !== t.length) return false;
    
    //make two objs to store inputs from both s and t 
    let map = {}
    
    //loop through and add characters from s input
    for(let i = 0; i < s.length; i++){
        let letter = s[i];
        
        if(!map[letter]){
            map[letter] = 1;
        } else {
            map[letter]++;
        }
    
    }
    
    //loop through and add characters from t input
    for(let i = 0; i < t.length; i++){
        let letter = t[i]
    //if we encounter a letter in s input thats already in map
        if(map[letter]){
            //decrease the value
            map[letter]--;
        } else {
        //else return false
            return false;
        }
        
        
     }
    
    return true;
    
};