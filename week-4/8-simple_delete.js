// Write a function that deletes a key in a dictionary.

// Prototype: def simple_delete(a_dictionary, key=""):
// key argument will be always a string
// If a key doesn’t exist, the dictionary won’t change
// You are not allowed to import any module


//=========SOLUTION==========//


function simple_delete(a_dictionary, key=""){
   if(key in a_dictionary){
    delete a_dictionary[key]
   }
    return a_dictionary
}


let myDict = {'a': 1, 'b': 2, 'c': 3};

console.log(simple_delete(myDict, 'a'))




//OR========//


function simpleDelete(aDictionary, key) {
    // Create a copy of the object to avoid modifying the original
    let updatedDictionary = Object.assign({}, aDictionary);

    // Check if the key exists by iterating through the keys
    let keyExists = false;
    for (let k in updatedDictionary) {
        if (k === key) {
            keyExists = true;
            break;
        }
    }

    // Delete the key if it exists
    if (keyExists) {
        delete updatedDictionary[key];
    }
    
    return updatedDictionary;
}

// Example usage:
let myObject = {'a': 1, 'b': 2, 'c': 3};
let newObject = simpleDelete(myObject, 'b');  // Deletes the key 'b'
let anotherObject = simpleDelete(myObject, 'd');  // Does nothing since 'd' doesn't exist

console.log(myObject);       // Original object remains unchanged
console.log(newObject);      // Modified object
console.log(anotherObject);  // Original object remains unchanged
