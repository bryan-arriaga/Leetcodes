/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    
    let subStrings = {};
    let result = [];

    
    for(let i = 0; i < s.length; i++){
        let dnaSequence = s.slice(i, i + 10);
        
        if(!subStrings[dnaSequence]){
            subStrings[dnaSequence] = 1;
        } else {
            subStrings[dnaSequence]++;
        }
        
        if(subStrings[dnaSequence]=== 2) result.push(dnaSequence);
        
        
    }
    
    return result;
    
};