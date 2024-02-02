//Write a program that prints the ASCII alphabet, in lowercase, not followed by a new line.

//solution

function printLowercaseAlphabet(){
    for( let i = 97; i <= 122; i++ ){
        process.stdout.write(String.fromCharCode(i));
    }
}

printLowercaseAlphabet();