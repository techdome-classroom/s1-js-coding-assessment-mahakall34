/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    // Mapping of Roman numerals to their integer values
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    // Iterate through the string in reverse
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanValues[s[i]];

        // Check if we should subtract or add the current value
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }

        // Update prevValue to current for next iteration
        prevValue = currentValue;
    }

    return total;
}

// Example usage
console.log(romanToInt("III"));       // Output: 3
console.log(romanToInt("LVIII"));     // Output: 58
console.log(romanToInt("MCMXCIV"));   // Output: 1994

};


module.exports={romanToInt}
