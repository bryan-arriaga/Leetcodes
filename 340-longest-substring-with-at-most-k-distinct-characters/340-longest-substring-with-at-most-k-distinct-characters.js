/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    
  
    let l = 0;
    let r = 0;
    let ans = 0;
    let counter = 0;
    
    
  var hash = {};
  while (r < s.length) {
    var rChar = s[r];
    if (!hash[rChar ]) {
      hash[rChar] = 1;
      counter++;
    } else {
      hash[rChar]++;
    }

    while (counter === k+1) {
      var lChar = s[l];
      hash[lChar]--;
      if (hash[lChar] === 0) counter--;
      l++;
    }

    ans = Math.max(ans, r-l+1);
    r++;
  }

  return ans;
};