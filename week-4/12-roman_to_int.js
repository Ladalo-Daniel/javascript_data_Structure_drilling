// Technical interview preparation:

// You are not allowed to google anything
// Whiteboard first
// Create a function def roman_to_int(roman_string): that converts a Roman numeral to an integer.

// You can assume the number will be between 1 to 3999.
// def roman_to_int(roman_string) must return an integer
// If the roman_string is not a string or None, return 0



//=========SOLUTION=========//

function romanToInt(romanString) {
    if (typeof romanString !== 'string' || romanString === null) {
        return 0;
    }

    const romanDict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};

    let result = 0;
    let prevValue = 0;

    for (let i = romanString.length - 1; i >= 0; i--) {
        const char = romanString[i];
        // console.log(char)
        const value = romanDict[char];
        // console.log(value)

        if (value < prevValue) {
            result -= value;
        } else {
            result += value;
        }

        prevValue = value;
    }

    return result;
}


console.log(romanToInt('IV'))




//======OR======//


function romanToInt(romanString) {
    if (typeof romanString !== 'string' || romanString === null) {
        return 0;
    }

    const romanDict = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    return romanString.split('').reduceRight((result, char, index, arr) => {
        const value = romanDict.get(char);
        const nextValue = romanDict.get(arr[index - 1]) || 0;

        return result + (value < nextValue ? -value : value);
    }, 0);
}

