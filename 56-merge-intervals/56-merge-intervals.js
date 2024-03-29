/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    intervals.sort((a,b) => a[0] - b[0]);
    
    let stack = [];
    stack.push(intervals[0]);
    
    for(let i = 1; i < intervals.length; i++){
        let prev = stack.pop();
        let curr = intervals[i];
        
        if(prev[1] >= curr[0]){
            stack.push([prev[0], Math.max(prev[1], curr[1])]);
        } else {
            stack.push(prev, curr);
        }
    }
    
    return stack;
    
};