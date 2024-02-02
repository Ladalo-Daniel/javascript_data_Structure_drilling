// Write a program that imports functions from the file calculator_1.py, does some Maths, and prints the result.

// Do not use the function print (with string format to display integers) more than 4 times
// You have to define:
// the value 10 to a variable a
// the value 5 to a variable b
// and use those two variables only, as arguments when calling functions (including print)
// a and b must be defined in 2 different lines: a = 10 and another b = 5
// Your program should call each of the imported functions. See example below for format
// the word calculator_1 should be used only once in your file
// You are not allowed to use * for importing or __import__
// Your code should not be executed when imported



//========SOLUTION===========//

function add(a,  b){
    return a + b
}

function sub(a, b){
    return a - b
}

function mul(a, b){
    return a * b
}

function div(a, b){
    return a / b
}

let a = 10
let b = 5

//console.log(add(a, b) + "\n" + sub(a,b) + "\n" + mul(a, b) + "\n" + div(a, b))


let adds = add(a, b);
let subs = sub(a, b);
let muls = mul(a, b);
let divs = div(a, b);

// Display the results using template literals
console.log(`${a} + ${b} = ${adds}`);
console.log(`${a} - ${b} = ${subs}`);
console.log(`${a} * ${b} = ${muls}`);
console.log(`${a} / ${b} = ${divs}`);