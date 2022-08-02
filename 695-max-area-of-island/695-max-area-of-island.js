/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    
    let currArea = 0;
    let maxArea = 0;
    
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            currArea = 0;
            
            if(grid[row][col] === 1){    
                neighborCheck(row, col)
                
            }
            maxArea = Math.max(maxArea, currArea);
        }
    }
    
    function neighborCheck(row, col){
        
        if(grid?.[row]?.[col] === 1){
            currArea++;    
            grid[row][col] = 2;
            
            
            neighborCheck(row + 1, col)
            neighborCheck(row - 1, col)
            neighborCheck(row, col + 1)
            neighborCheck(row, col - 1)
        }
    }
    
    return maxArea
};

