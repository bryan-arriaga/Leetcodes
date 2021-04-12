/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    //start out array with first two starting values
    let arr = [0 , 1];
    
    //iterate through given input
    for(let i = 2; i <= n; i++)
    
    //follow fib sequence formula
    arr.push(arr[i - 2] + arr[i - 1]);
    
    //return arr with given input inside
    return arr[n];
    
};