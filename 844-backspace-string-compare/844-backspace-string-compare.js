/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    return compare(s) === compare(t);
    
    function compare(str){
        let counter = 0;
        let newString = 0;
        
        for(let i = str.length - 1; i >= 0; i--){
            if(str[i] === '#'){
                counter++;
            } else if(counter > 0){
                counter--;
            } else {
                newString = str[i] + newString;
            }
        }
        return newString;
    }
};



