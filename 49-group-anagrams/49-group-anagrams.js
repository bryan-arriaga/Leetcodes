/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    //create a object to hold every string 
    let map = {};
    
    //for loop iterate through strs
    for(let str of strs){
    //create a sorted var 
    let sorted = str.split("").sort().join("");
    
    map[sorted] ? map[sorted].push(str) : map[sorted] = [str];
    
    }

    
    //return object.values of map
    return Object.values(map)
};