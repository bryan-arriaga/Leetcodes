/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //create a var for the output
    let numberOfIslands = 0;
    
    //iterate through grid for rows and cols
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            if(grid?.[row]?.[col] === "1"){
                numberOfIslands++;
                dfs(row, col)
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
    
    
    return numberOfIslands 
    
};