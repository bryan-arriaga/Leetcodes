/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let numOfIslands = 0;
    
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            if(grid[row][col] === "1"){
                dfs(row, col);
                numOfIslands++;
            }
        }
    }
    
    function dfs(row, col){
        if(grid?.[row]?.[col] === "1"){
            grid[row][col] = "2";
            
            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);
        }
    }
    
    return numOfIslands;
    
};