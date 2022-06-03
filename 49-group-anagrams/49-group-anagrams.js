/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let map = new Map();
    let arr = [];
    
    for(let i = 0; i < strs.length; i++){
        const sorted = strs[i].split("").sort().join("");
        
        if(map.has(sorted)){
            map.get(sorted).push(strs[i]);
        } else {
            map.set(sorted, [strs[i]])
        }
    }
    
    for(let [key, value] of map){
        arr.push(value)
    }
    
    return arr;
    
    
};