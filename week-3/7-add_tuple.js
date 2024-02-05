// Write a function that adds 2 tuples.

// Prototype: def add_tuple(tuple_a=(), tuple_b=()):
// Returns a tuple with 2 integers:
// The first element should be the addition of the first element of each argument
// The second element should be the addition of the second element of each argument
// You are not allowed to import any module
// You can assume that the two tuples will only contain integers
// If a tuple is smaller than 2, use the value 0 for each missing integer
// If a tuple is bigger than 2, use only the first 2 integers



//=====SOLUTION=====//


function add_tuple(tople_a = [], tople_b = []){
    const a1 = tople_a.length >= 2 ? tople_a[0] : 0
    const a2 = tople_a.length >= 2 ? tople_a[1] : 0
    const b1 = tople_b.length >= 2 ? tople_b[0] : 0
    const b2 = tople_b.length >= 2 ? tople_b[1] : 0

    const result = [a1 + b1, a2 + b2]
    return result
}


//USE_CASE

const test1 = [1, 2, 3]
const test2 = [4, 5, 6]

const result = add_tuple(test1, test2)

console.log(result)



//SOLUTION2=====//


function addCoordinates(coordA = [], coordB = []) {
    const x1 = coordA.length >= 2 ? coordA[0] : 0;
    const y1 = coordA.length >= 2 ? coordA[1] : 0;
    const x2 = coordB.length >= 2 ? coordB[0] : 0;
    const y2 = coordB.length >= 2 ? coordB[1] : 0;

    const result = [x1 + x2, y1 + y2];

    return result;
}

// Example usage:
const pointA = [10, 5];
const pointB = [5, 8];
const sum = addCoordinates(pointA, pointB);
console.log("Sum of coordinates:", sum); // Output: [15, 13]