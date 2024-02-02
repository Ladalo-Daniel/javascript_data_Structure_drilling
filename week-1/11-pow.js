// Write a function that computes a to the power of b and return the value.

// Prototype: def pow(a, b):
// Returns the value of a ^ b

function power(a, b) {
    let result = 1

    for( let i = 0; i < b; i++) {
        result = result * a
    }

    return result
}

console.log(power(2, 3))


//Another Way

function pow(a, b){
   return Math.pow(a, b);
}

const result = pow(2, 2)
console.log(result)