/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    return compare(s) === compare(t);
    
    function compare(str) {
        let newString = '';
        let backspaces = 0;
        
        for (let i = str.length - 1; i >= 0; i--) {        
            if (str[i] === '#') {
                backspaces++;
            } else if (backspaces > 0) {
                backspaces--;;
            } else {
                newString = str[i] + newString;
                  console.log('newString: ' + newString)
                  console.log('\n'+ 'counter: '+ backspaces)
            }
          
        }
        
        return newString;
    }
};



