// Write a function that prints a dictionary by ordered keys.

// Prototype: def print_sorted_dictionary(a_dictionary):
// You can assume that all keys are strings
// Keys should be sorted by alphabetic order
// Only sort keys of the first level (don’t sort keys of a dictionary inside the main dictionary)
// Dictionary values can have any type
// You are not allowed to import any module



//========SOLUTION=========//

function print_sorted_dictionary(dictionary){
    let sortedKeys = Object.keys(dictionary).sort()

    for(let key of sortedKeys){
        console.log(`${key}: ${dictionary[key]}`)
    }
}


const a_dictionary = { 
    language: "C", 
    number: 89, 
    track: "Low level", 
    ids: [1, 2, 3]
 }

 console.log(print_sorted_dictionary(a_dictionary))










 //==========OR===============//


 function printSortedDictionary(aDictionary) {
    // Extract keys
    let keys = [];
    for (let key in aDictionary) {
        if (aDictionary.hasOwnProperty(key)) {
            keys.push(key);
        }
    }

    // Sort keys
    for (let i = 0; i < keys.length - 1; i++) {
        for (let j = i + 1; j < keys.length; j++) {
            if (keys[i] > keys[j]) {
                // Swap keys
                let temp = keys[i];
                keys[i] = keys[j];
                keys[j] = temp;
            }
        }
    }

    // Print sorted dictionary
    for (let key of keys) {
        console.log(`${key}: ${aDictionary[key]}`);
    }
}

// Example usage:
let myDictionary = {'banana': 3, 'apple': 5, 'orange': 2, 'grape': 8};
printSortedDictionary(myDictionary);
