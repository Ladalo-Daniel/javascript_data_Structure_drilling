// Write a function that deletes the item at a specific position in a list.

// Prototype: def delete_at(my_list=[], idx=0):
// If idx is negative or out of range, nothing change (returns the same list)
// You are not allowed to use pop()
// You are not allowed to import any module

//==========SOLUTION==========//


function deleteAt(myArray = [], idx = 0) {
    // Check if idx is negative or out of range
    if (idx < 0 || idx >= myArray.length) {
        return myArray;  // Return the same array if idx is invalid
    }

    // Create a new array with the item at the specified index removed
    const resultArray = myArray.slice(0, idx).concat(myArray.slice(idx + 1));

    return resultArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const indexToDelete1 = 2;
const result = deleteAt(originalArray, indexToDelete1);

console.log(result);  // Output: [1, 2, 4, 5]



function delete_at(my_list = [], idx=0){
    if(!my_list || idx < 1 || idx >= my_list.length){
        return my_list
    }

    const result_list = []

    for(let i = 0; i < my_list.length; i++){
        let item = my_list[i]
        
        if(i !==idx){
            result_list.push(item)
        }
    }

    return result_list
}


//USE CASE

const test = [1,2,3,4,5,6,7]
const indexToDelete = 2;

console.log(delete_at(test, indexToDelete))