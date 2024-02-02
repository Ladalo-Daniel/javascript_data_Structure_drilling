// Write a function that prints a string in uppercase followed by a new line.

// Prototype: def uppercase(str):
// You can only use no more than 2 print functions with string format
// You can only use one loop in your code
// You are not allowed to import any module
// You are not allowed to use str.upper() and str.isupper()

//SOLUTION============>>>>

function isUppercase(str) {
    for( let i = 0; i < str.length; i++){
        const char = str[i];

        const upperChar = (char >= 'a' && char <= 'z') ? String.fromCharCode(char.charCodeAt(0) - 32) : char;
        console.log(upperChar)
    }

    // for (let i = 0; i < str.length; i++) {
    //     const char = str[i];
    //     // Convert each character to uppercase using ASCII values
    //     const upperChar = (char >= 'a' && char <= 'z') ? String.fromCharCode(char.charCodeAt(0) - 32) : char;
    //     console.log(upperChar)
    // }
}

isUppercase("hello")