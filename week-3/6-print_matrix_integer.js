// Write a function that prints a matrix of integers.

// Prototype: def print_matrix_integer(matrix=[[]]):
// Format: see example
// You are not allowed to import any module
// You can assume that the list only contains integers
// You are not allowed to cast integers into strings
// You have to use str.format() to print integers


//==========SOLUTION========//

 const print_matrix_integer = () => {

 }


 function printMatrixInteger(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const eachRow = matrix[i]
        for (let j = 0; j < eachRow.length; j++) {
            const eachElement = matrix[i][j]
            process.stdout.write(`${eachElement} `);
        }
        process.stdout.write('\n');
    }
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

printMatrixInteger(matrix);
