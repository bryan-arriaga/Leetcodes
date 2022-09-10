/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //create a map with all of the roman numerals and int vals
    let map = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50, 
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    
    let val = 0;
    
    //iterate through s
    for(let i = 0; i < s.length; i++){
        let curr = map[s[i]]
        let next = map[s[i + 1]];
        
        if(curr < next){
            val -= curr
        } else val += curr
    }
    
    return val;
    
    
};