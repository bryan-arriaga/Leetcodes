/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    
    let subStrings = {};
    let output = [];
    let i = 0;
    
    while(i < s.length){
        const dnaSequence = s.slice(i, i + 10);
        
        if(!subStrings[dnaSequence]){
            subStrings[dnaSequence] = 1;
        } else {
            subStrings[dnaSequence]++;
        }
        i++
        
        if(subStrings[dnaSequence] === 2) output.push(dnaSequence);
    }
    
    return output;
    
};