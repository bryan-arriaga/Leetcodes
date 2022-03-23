/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
    if(intervals === 0){
        return [ newInterval ];
    }
    
    result = [];
    
    for(let [start, end] of intervals){
        if(!newInterval || newInterval[0] > end){
            result.push([start, end]);
        } else if(start > newInterval[1]){
            result.push(newInterval);
            newInterval = null;
            result.push([start, end]);
        } else {
            newInterval[0] = Math.min(newInterval[0], start);
            newInterval[1] = Math.max(newInterval[1], end);
        }
    }
    
    if(newInterval){
        result.push(newInterval);
    }
    
    return result;
};