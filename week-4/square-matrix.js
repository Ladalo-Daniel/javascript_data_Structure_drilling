// Write a function that computes the square value of all integers of a matrix.

// Prototype: def square_matrix_simple(matrix=[]):
// matrix is a 2 dimensional array
// Returns a new matrix:
// Same size as matrix
// Each value should be the square of the value of the input
// Initial matrix should not be modified
// You are not allowed to import any module
// You are allowed to use regular loops, map, etc.


//=======SOLUTION==========//

const square_matrix_simple = (matrix) => {
     let newMarix = []

     for(let i = 0; i < matrix.length; i++){
        const newRow = []
        let eachRow = matrix[i]

        for(let j = 0; j < eachRow.length; j++){
            let eachElement = eachRow[j]

            newRow.push(matrix[i][j] **2)
        }

        newMarix.push(newRow)
     }

     return newMarix
}


// Example usage:
const originalMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const result = square_matrix_simple(originalMatrix);
console.log(result);