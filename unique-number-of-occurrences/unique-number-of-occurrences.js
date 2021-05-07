/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    //implement hash map
    let map = new Map();
    
    //iterate through given arr
    for(let i = 0; i < arr.length; i++){
        
        //container to hold every number being looped through
        let number = arr[i];
    
        //pass in numbers to arr
        //if key is unique set to value to 1 if its first time being passed to map
        if(!map[number]){
            map[number] = 1;
        } else {
            //else increment value in map for that key        
            map[number]++;
        }

    }
    

    //save number of values to a variable
    let frequency = Object.values(map);
    
    //create new set passing in frequency of values from map
    let set = new Set(frequency)
    
    //compare the length in boolean of frequency and set
    return frequency.length === set.size;
    
};