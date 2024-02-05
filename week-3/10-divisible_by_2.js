// Write a function that finds all multiples of 2 in a list.

// Prototype: def divisible_by_2(my_list=[]):
// Return a new list with True or False, depending on whether the integer at the same position in the original list is a multiple of 2
// The new list should have the same size as the original list
// You are not allowed to import any module

//==========SOLUTION============//

const divisible_by_2 = (my_list = []) => {
    if(!my_list || my_list.length === 0){
        return null
    }

    for( let i = 0; i < my_list.length; i++){
        const item = my_list[i]
        
       const result = ( item % 2 === 0) ? `TRUE: ${item} is Divisible by 2` : `FALSE ${item} is not DIVISIBLE by 2`
       console.log(result)
    }
   

}


//USE CASE

const test = [1,2,3,4,5,6,7,8,9]

console.log(divisible_by_2(test))
console.log(test)





function divisibleBy2(myArray = []) {
    // Create a new array to store true or false based on whether the integer is a multiple of 2
    const resultArray = [];

    // Iterate through the elements of the input array
    for (let i = 0; i < myArray.length; i++) {
        // Check if the number is a multiple of 2
        const isMultipleOf2 = myArray[i] % 2 === 0;

        // Push the result to the new array
        resultArray.push(isMultipleOf2);
    }

    return resultArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = divisibleBy2(originalArray);

console.log(result);
// Output: [false, true, false, true, false, true, false, true, false, true]
