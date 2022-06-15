/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    let curr;
    
    while(i < j){
      curr = (j - i) * Math.min(height[i], height[j]);
      max = Math.max(max, curr);
      if(height[i] > height[j]){
          j--;
      } else {
          i++
      }
  }
    
    return max;
    
    
};