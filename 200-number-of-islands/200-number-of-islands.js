/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let numberOfIslands = 0;
    
    //loop through starting at top left
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            if(grid[row][col] === "1"){
                numberOfIslands++;
                dfs(row, col)
            }
        }
    }
    
    
    //dfs 1 for matching vertical horizontal 1's
    function dfs(row, col){
        //
        if(grid?.[row]?.[col] === "1"){
            //set the value = to something else besides 1 or null
            grid[row][col] = "2"
            
            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);
        }
    }
    
    return numberOfIslands;
};