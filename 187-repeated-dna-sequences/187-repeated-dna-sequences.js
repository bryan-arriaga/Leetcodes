/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    
    let seen = {};
    let output = [];
    let i = 0;
    
    while(i + 10 <= s.length){
        const dnaSequence = s.slice(i, i + 10);
        
        if(seen[dnaSequence]){
            seen[dnaSequence]++;
        } else {
            seen[dnaSequence] = 1;
        }
        
        if(seen[dnaSequence] === 2){
           output.push(dnaSequence); 
        }
        
        i++;
        
    }
    
    
    
    //return output at end
    return output;
    
};