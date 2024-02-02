// Write a program that prints all possible different combinations of two digits.

// Numbers must be separated by ,, followed by a space
// The two digits must be different
// 01 and 10 are considered the same combination of the two digits 0 and 1
// Print only the smallest combination of two digits
// Numbers should be printed in ascending order, with two digits
// The last number should be followed by a new line
// You can only use no more than 3 print functions with string format
// You can only use no more than 2 loops in your code
// You are not allowed to store numbers or strings in a variable
// You are not allowed to import any module


//SOLUTIOnS1=========

for( let i = 0; i <= 9; i++) {

    for( let j = i; j <= 9; j++){

        if( i !== j){
            const saparator = (i === 9 && j === 9) ? "\n" : ", "
            console.log(`${i}${j}${saparator}`)
        }
    }
}


//========SOLUTION WITH FUNCTION========
function printDigitCombinations() {
    for (let i = 0; i <= 9; i++) {
        for (let j = i; j <= 9; j++) {
            if (i !== j) {
                const separator = (i === 9 && j === 9) ? '\n' : ', ';
                console.log(`${i}${j}${separator}`);
            }
        }
    }
}

// Call the function to print digit combinations
printDigitCombinations();






//========SOLUTION WITH FUNCTION AND JS METHOD========
function printDigitCombinations() {
    for (let i = 0; i <= 9; i++) {
        for (let j = i; j <= 9; j++) {
            if (i !== j) {
                const separator = (i === 9 && j === 9) ? '\n' : ', ';
                console.log([i, j].join('') + separator);
            }
        }
    }
}

// Call the function to print digit combinations
printDigitCombinations();
