// Write a function that computes the square value of all integers of a matrix using map

// Prototype: def square_matrix_map(matrix=[]):
// matrix is a 2 dimensional array
// Returns a new matrix:
// Same size as matrix
// Each value should be the square of the value of the input
// Initial matrix should not be modified
// You are not allowed to import any module
// You have to use map
// You are not allowed to use for or while
// Your file should be max 3 lines


const square_matrix_map = (matrix=[]) => matrix.map((row) => row.map((x) => x ** 2))


matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


console.log(matrix)

console.log(square_matrix_map(matrix))