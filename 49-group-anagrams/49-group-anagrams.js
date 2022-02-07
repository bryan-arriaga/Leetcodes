/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) { 
    
    strs.sort();
    
    let map = {};
    
    //iterate through given strs input
    for(let i = 0; i < strs.length; i++){
        let str = strs[i];
        let sorted = str.split('').sort().join('');
        
        if(map[sorted] === undefined){
            map[sorted] = [str];
        } else {
            map[sorted].push(str)
        }
    }
    
    return Object.values(map)
    
};