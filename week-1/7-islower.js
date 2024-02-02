// Write a function that checks for lowercase character.

// Prototype: def islower(c):
// Returns True if c is lowercase
// Returns False otherwise
// You are not allowed to import any module
// You are not allowed to use str.upper() and str.isupper()


//===========SOLUTION=========

function isLowerCase(c){
    const check = (c >= "a" && c <= "z") ? "TRUE" : "FALSE";
    return check;
}

console.log(isLowerCase("l"))


function toUppercase(char) {

    if( typeof char !== "string" && char.length !== 1){
        throw new Error("Character must be a string and single")
    }

    if( char >= "a" && char <= "z"){
        return String.fromCharCode(char.charCodeAt(0) - 32);
    }

    return char;
}

try{
    console.log(toUppercase("a"))
    console.log(toUppercase("ba"))
    console.log(toUppercase("z"))
} catch(error){
    console.log(error)
}