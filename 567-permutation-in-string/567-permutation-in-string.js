/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  
    let counts = {}
    let patternCounts = {};
    let total = 0;

    for (let i = 0; i < s1.length; i++) {
        patternCounts[s1[i]] = (patternCounts[s1[i]] || 0) + 1
    }

    for (let i = 0; i < s2.length; i++) {
        if (patternCounts[s2[i]]) {
            counts[s2[i]] = (counts[s2[i]] || 0) + 1;
            total++;
            
            while (counts[s2[i]] > patternCounts[s2[i]]) {
                counts[s2[i - --total]] -= 1
            }
            if (total === s1.length) return true;
        }else{
            counts = {}
            total = 0;
        }
    }
    
    return false
    
};