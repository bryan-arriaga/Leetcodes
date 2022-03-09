/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let map = {};
    let n = s.length;
    
    //iterate through given input
    for(let i = 0; i < n; i++){
        //pass in the numbers as values and count as keys
        let num = s[i];
        
        if(map[num]){
            map[num]++;
        } else {
            map[num] = 1;
        }
       
    }
    
    //find key with a value of 1 and return its index
    for(let i = 0; i < s.length; i++){
        if(map[s.charAt(i)] === 1) return i;
    }


    //return -1 at end
    return -1;
    
};