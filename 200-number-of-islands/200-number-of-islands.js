/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
	let numOfIslands = 0
	//iterate through each island from the top left corner
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			//if the tile is equal to 1 
			if (grid[row][col] === "1") {
				dfs(row, col)
				//add one to the island count
				numOfIslands++
			}
		}
	}
	function dfs(row, col) {
		//if the tile is in bounds and land
		if (grid?.[row]?.[col] === "1") {
			//set the tile to an arbitrary value that isn't "1" or undefined
			grid[row][col] = "2"

			//check each horizonantal and vertical neighbor
			dfs(row + 1, col)
			dfs(row - 1, col)
			dfs(row, col + 1)
			dfs(row, col - 1)
		}
	}
	//return numOfIslands
	return numOfIslands
}