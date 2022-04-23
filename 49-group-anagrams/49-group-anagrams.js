/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let map = {};
    
    for(let i = 0; i < strs.length; i++){
        let str = strs[i];
        let sorted = str.split('').sort().join('');
        
        if(!map[sorted]){
            map[sorted] = [str];
        } else {
            map[sorted].push(str);
        }
    }
    
    return Object.values(map);
    
};