/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    
    //edge case if both string are not equal to one another
    if(s.length !== t.length){
        return false;
    }
    
    //create instance of hash map to compare each letter of each input
    const map = new Map();
    
    //iterate through both s and t input
    for(let i = 0; i < s.length; i++){
        
        //container to hold each letter of given input
        let letter = s[i];
        
        //for first loop iterating through -- add it to map or increment count of letter
        if(map[letter]){
            map[letter]++;
        } else {
            map[letter] = 1;
        }
    }

    
    //iterate through second given input
    for(let i = 0; i < t.length; i++){
        //container to hold each letter being looped through
        let letter = t[i];
        //if statement-- if letter does not exist in map then return false
        if(map[letter]){
            map[letter] -= 1;
        } else {
            //else decrement existing letter from map     
            return false
        }
        
    }

    
    //return true
    return true;
    
    
};