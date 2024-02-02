// Write a function that prints the last digit of a number.

// Prototype: def print_last_digit(number):
// Returns the value of the last digit
// You are not allowed to import any module


function printLastDigit(number) {
    if(!Number.isInteger(number)){
        throw new Error("Input must be a number")
    }

    // const lastDigits = Math.abs(number) % 10; OR

    const numberString = Math.abs(number).toString()

    const lastDigits = parseInt(numberString.charAt(numberString.length - 1), 10)

    console.log(lastDigits)

    return lastDigits;
}

//Test cases
const result = printLastDigit(12345562313321799999999990);
console.log(`Last Digits ${result}`)