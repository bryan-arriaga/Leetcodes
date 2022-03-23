/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
    let result = [];
    
    for(let [start,end] of intervals){
        if(!newInterval || end < newInterval[0]){
            result.push([start,end]);
        } else if(newInterval[1] < start){
            result.push(newInterval);
            newInterval = null;
            result.push([start,end])
        } else {
            newInterval[0] = Math.min(newInterval[0], start);
            newInterval[1] = Math.max(newInterval[1], end);
        }
    }
    
    if(newInterval){
        result.push(newInterval);
    }
    
    return result
};