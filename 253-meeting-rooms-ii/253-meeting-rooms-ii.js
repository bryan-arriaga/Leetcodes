/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    
    if(intervals.length === 0 || intervals === null) return 0;
    
    let start = [intervals.length];
    let end = [intervals.length];

    for(let i = 0; i < intervals.length; i++){
        start[i] = intervals[i][0];
        end[i] = intervals[i][1];
        
    }
    
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);
    
    let meetingRooms = 0;
    let startP = 0;
    let endP = 0;
 
    while(startP < intervals.length){
        
        if(start[startP] >= end[endP]){
            endP++;
            meetingRooms--;
        }
        startP++;
        meetingRooms++;
    }
    
    return meetingRooms;
    
};