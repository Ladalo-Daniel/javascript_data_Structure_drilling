// Write a program that imports all functions from the file calculator_1.py and handles basic operations.

// Usage: ./100-my_calculator.py a operator b
// If the number of arguments is not 3, your program has to:
// print Usage: ./100-my_calculator.py <a> <operator> <b> followed with a new line
// exit with the value 1
// operator can be:
// + for addition
// - for subtraction
// * for multiplication
// / for division
// If the operator is not one of the above:
// print Unknown operator. Available operators: +, -, * and / followed with a new line
// exit with the value 1
// You can cast a and b into integers by using int() (you can assume that all arguments will be castable into integers)
// The result should be printed like this: <a> <operator> <b> = <result>, followed by a new line
// You are not allowed to use * for importing or __import__
// Your code should not be executed when imported


//==========SOLUTION============//


function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function mul(a,b){
    return a * b;
}

function div(a, b){
  return (b !== 0) ? a / b : "Error: Devision by zero not divisible";
}

function my_calculator(a, operator, b){

    switch (operator) {
        case "+" :
            return add(a, b);
        case "-" :
            return sub(a, b);
        case "*" :
            return mul(a, b);
        case "/" :
            return div(a, b);
        default:
            return "Error: Unknown operator. Available operators: +, -, * and /."
    }
}


//Main Excecution

// function mainCall(argv) {
//    if(argv.length !== 4){
//     console.log("Usage: ./100-my_calculator.js <a> <operator> <b>");
//     return
//    }

//    const a = parseInt(argv[2])
//    const operator = parseInt(argv[3])
//    const b = argv[4]

//    const result = my_calculator(a, operator, b)

//    return console.log(`${a} ${operator} ${b} = ${result}`);
// }


//Example usage:
// const argv = process.argv;
// mainCall(2 + 2);

if(process.argv.length !== 5) {
    console.log("Usage: ./100-my_calculator.js <a> <operator> <b>");
    process.exit(1);
};

const a = parseInt(process.argv[2]);
const operator = process.argv[3];
const b = parseInt(process.argv[4]);

const result = my_calculator(a, operator, b);
console.log(`${a} ${operator} ${b} = ${result}`);




