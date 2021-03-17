/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    //create hashmap to store values from array and constant lookup times O(1)
    let map = new Map();
    
    //iterate through given nums array
    for(let i = 0; i < nums.length; i++){
        
        //container to hold number being looped through
        let number = nums[i];
        
         //if thats the first instance of the number being encountered add it to map
        if(!map[number]){
            map[number] = 1;
        } else {
           
            //else if that number already exists then return true 
            map[number]++;
            return true;
        }
        
        
        
    }
    
   
    
   
    
    
    
    //return false at end
    return false;
    
};