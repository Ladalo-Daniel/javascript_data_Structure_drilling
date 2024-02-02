// Write a function that creates a copy of the string, removing the character at the position n (not the Python way, the “C array index”).

// Prototype: def remove_char_at(str, n):
// You are not allowed to import any module


function remove_char_at(str, n) {
    if(n < 0 || n >= str.length){
        return str
    }

    return str.slice(0, n) + str.slice(n + 1)
}

// Example usage
let originalString = "example";
let result = remove_char_at(originalString, 2);
console.log(result);