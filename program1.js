/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    // Stack to keep track of opening brackets
    let stack = [];
    
    // Map for matching pairs of parentheses
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Iterate over the string
    for (let char of s) {
        // If the character is a closing bracket
        if (char in matchingBrackets) {
            // Pop from the stack or use a dummy value if the stack is empty
            const topElement = stack.length === 0 ? '#' : stack.pop();
            
            // If the popped element does not match the corresponding opening bracket
            if (topElement !== matchingBrackets[char]) {
                return false;
            }
        } else {
            // It's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, all brackets were properly closed
    return stack.length === 0;
}

// Example test cases
console.log(isValid("()"));     // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));     // false
console.log(isValid("([)]"));   // false
console.log(isValid("{[]}"));   // true
};

module.exports = { isValid };


