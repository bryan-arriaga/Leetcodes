/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    //left to buy - right to sell
    let left = 0;
    let right = 1;
    let maxP = 0;
    
    //loop through the array
    for(let i = 0; i < prices.length; i++){
        //if prices[left] < prices[right]
        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left];
            maxP = Math.max(maxP, profit);
            
        } else {
            left = right
        }
        
        right++;
        
        
    }
    
    return maxP
    
};