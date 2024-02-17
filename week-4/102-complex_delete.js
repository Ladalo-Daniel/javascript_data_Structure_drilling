// Write a function that deletes keys with a specific value in a dictionary.

// Prototype: def complex_delete(a_dictionary, value):
// If the value doesn’t exist, the dictionary won’t change
// All keys having the searched value have to be deleted
// You are not allowed to import any module


// Sample dictionary representing student grades
const studentGrades = {
    'Alice': 85,
    'Bob': 92,
    'Charlie': 75,
    'David': 92,
    'Eva': 75
};


function complex_delete(a_dictionary, value){
   Object.keys(a_dictionary).forEach(key => {
    if(a_dictionary[key] === value) {
        delete a_dictionary[key]
    }
   })
}

complex_delete(studentGrades, 85)
console.log(studentGrades)




//========OR==========//

// Function to remove all entries with grade 75
function complexDelete(aDictionary, value) {
    Object.keys(aDictionary).forEach(key => {
        if (aDictionary[key] === value) {
            delete aDictionary[key];
        }
    });
}

// Remove all entries with grade 75
complexDelete(studentGrades, 75);

// Output the updated dictionary
console.log(studentGrades);
