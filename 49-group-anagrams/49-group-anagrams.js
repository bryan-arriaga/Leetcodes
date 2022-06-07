/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    if(strs.length <= 0 || strs === null) return 0;
    
    //create a map 
    //create answer arr to return at the end
    let map = new Map();
    let arr = [];
    
    //iterate through strs and make new const for sorted strings
    for(let i = 0; i < strs.length; i++){
        const sorted = strs[i].split("").sort().join("")
        
        if(map.has(sorted)){
            map.get(sorted).push(strs[i])
        } else {
            map.set(sorted, [strs[i]])
        }
    }
    

    
    //iterate and append the values from map to answer array
    for(let [key, value] of map){
        arr.push(value);
    }
    
    return arr;
    
};