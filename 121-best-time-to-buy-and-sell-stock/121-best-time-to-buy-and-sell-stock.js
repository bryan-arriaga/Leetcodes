/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    //left to buy right to sell
    let left = 0;
    let right = 1;
    let maxP = 0;
    let profit;
    
    while(right < prices.length){
        if(prices[left] < prices[right]){
            profit = prices[right] - prices[left];
            maxP = Math.max(maxP, profit);
        } else {
            left = right
          
        }
        
        right++;
        
    }
    
    return maxP;
    
    
};