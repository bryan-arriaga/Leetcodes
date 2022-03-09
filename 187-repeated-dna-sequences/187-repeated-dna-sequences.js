/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    
    let subStrings = {};
    let result = [];
    let i = 0;
    
    while(i < s.length){
        let dnaSequence = s.slice(i, i + 10);
        
        if(!subStrings[dnaSequence]){
            subStrings[dnaSequence] = 1;
        } else {
            subStrings[dnaSequence]++;
        }
        
        if(subStrings[dnaSequence]=== 2) result.push(dnaSequence);
        
        i++;
    }
    
    return result;
    
};