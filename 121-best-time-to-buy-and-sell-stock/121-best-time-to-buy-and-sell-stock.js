/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxProfit = 0;
    let min = Number.MAX_VALUE;
    
    //iterate through given prices array
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        }
        
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }
    
    
    return maxProfit;
};