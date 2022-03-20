/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    //left to sell right to buy
    let left = 0;
    let right = 1;
    let maxP = 0;
    let currP = 0;
    
    while(right < prices.length){
        if(prices[left] < prices[right]){
            currP = prices[right] - prices[left];
            maxP = Math.max(maxP, currP);
        } else {
            left = right;
        }
        right++
    }
    
    return maxP;
    
};