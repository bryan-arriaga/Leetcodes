/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    //create a stack 
    let stack = [];
    
    //iterate through given s input
    for(let i = 0; i < s.length; i++){
        //container to hold every char looked at from given input
        let c = s.charAt(i);
        
        //use switch statement to pass the corresponding matching closing bracket
        switch(c){
            case '(':
                stack.push(')');
                break;
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            default:
                if(c !== stack.pop()) return false;
            
        }
          
    }
    //return length of s of 0 at end in strict equality
    return stack.length === 0;
};