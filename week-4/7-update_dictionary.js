// Write a function that replaces or adds key/value in a dictionary.

// Prototype: def update_dictionary(a_dictionary, key, value):
// key argument will be always a string
// value argument will be any type
// If a key exists in the dictionary, the value will be replaced
// If a key doesn’t exist in the dictionary, it will be created
// You are not allowed to import any module


//==========SOLUTION===========//


const update_dictionary = (a_dictionary, key, value) => {

    a_dictionary[key] = value
    return a_dictionary

}



//USE CASE

a_dictionary = { language: "C", number: 89, track: "Low level" }
new_dict = update_dictionary(a_dictionary, 'language', "Python")
console.log(new_dict)

new_dict = update_dictionary(a_dictionary, 'city', "San Francisco")
console.log(new_dict)


//OR


function updateDictionaryCrude(aDictionary, key, value) {
    let keyExists = false;

    for (let k in aDictionary) {
        if (k === key) {
            aDictionary[k] = value;
            keyExists = true;
            break;
        }
    }

    if (!keyExists) {
        aDictionary[key] = value;
    }

    return aDictionary;
}

// Example usage:
let myDict = {'a': 1, 'b': 2, 'c': 3};
updateDictionaryCrude(myDict, 'b', 5);  // Updates the value for key 'b'
updateDictionaryCrude(myDict, 'd', 7);  // Adds a new key 'd' with value 7
console.log(myDict);
