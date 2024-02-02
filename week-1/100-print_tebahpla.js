// Write a program that prints the ASCII alphabet, in reverse order, alternating lowercase and uppercase (z in lowercase and Y in uppercase) , not followed by a new line.

// You can only use one print function with string format
// You can only use one loop in your code
// You are not allowed to store characters in a variable
// You are not allowed to import any module



//Solution============

function AlphaBet(){
    for(let i = 25; i >= 0; i--){
        let lowerChar = String.fromCharCode('z'.charCodeAt(0) - i);
        let upperChar = String.fromCharCode('Y'.charCodeAt(0) - i);
    
        console.log(`${lowerChar}${upperChar} `)
    }
}

console.log(AlphaBet())