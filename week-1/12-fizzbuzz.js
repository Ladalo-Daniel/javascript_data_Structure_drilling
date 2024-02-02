// Write a function that prints the numbers from 1 to 100 separated by a space.

// For multiples of three print Fizz instead of the number and for multiples of five print Buzz.
// For numbers which are multiples of both three and five print FizzBuzz.
// Prototype: def fizzbuzz():
// Each element should be followed by a space


//SOLUTION==========

function fizzbuzz(){

    for(let i = 1; i <= 100; i++) {
       if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz ")
       } else if(i % 5 === 0){
         console.log("Buzz ")
        } else if(i % 3 === 0){
            console.log("Fizz ")
        }
        else{console.log(`${i} `)}


    }

}

console.log(fizzbuzz())