// Write a program that prints the ASCII alphabet, in lowercase, not followed by a new line.

// Print all the letters except q and e
// You can only use one print function with string format
// You can only use one loop in your code
// You are not allowed to store characters in a variable
// You are not allowed to import any module

//====solution=====

function printExcludedAlphabet() {
    for( let i = 97; i <= 122; i++){
        const currentCharacter = String.fromCharCode(i);

        if(currentCharacter !== "e" && currentCharacter !== "q"){
            process.stdout.write(currentCharacter);
        }
    }
}

printExcludedAlphabet();