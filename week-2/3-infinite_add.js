// // Write a program that prints the result of the addition of all arguments

// // The output should be the result of the addition of all arguments, followed by a new line
// // You can cast arguments into integers by using int() (you can assume that all arguments can be casted into integers)
// // Your code should not be executed when imported



// function printAllSumedArgs(argv) {
//     if(!argv){
//         throw new Error("I dey only gree when they call me with arguments passed")
//     }
//     if(!Number.isInteger(argv)){
//         throw new Error("Omoo, na only numbers || intergers this function dey gree for ooo")
//     }

//     const sumResult = argv.reduce((sum, arg) => {
//         return sum + parseInt(arg), 0;
//     })

//     return sumResult

    
   
    

// }

// console.log(printAllSumedArgs(4444444))






// Write a program that prints the result of the addition of all arguments

// The output should be the result of the addition of all arguments, followed by a new line
// You can cast arguments into integers by using int() (you can assume that all arguments can be casted into integers)
// Your code should not be executed when imported

function printAllSumedArgs(argv) {
    if (!argv || !Array.isArray(argv)) {
        throw new Error("Please provide an array of arguments");
    }

    const sumResult = argv.reduce((sum, arg) => {
        return sum + parseInt(arg);
    }, 0);

    return sumResult;
}

const argumentsArray = process.argv.slice(2);
const result = printAllSumedArgs(argumentsArray);

console.log(result);
