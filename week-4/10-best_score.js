// Write a function that returns a key with the biggest integer value.

// Prototype: def best_score(a_dictionary):
// You can assume that all values are only integers
// If no score found, return None
// You can assume all students have a different score
// You are not allowed to import any module


//==========SOLUTION===========//

function best_score(a_dictionary){}


const obj = { a: 2, b: 4, c: 6, d: 8, e: 10 }
console.log(best_score(obj))



//=========OR===========//

function bestScore(aDictionary) {
    if (Object.keys(aDictionary).length === 0) {
        return null;
    }

    let maxKey = Object.keys(aDictionary).reduce((a, b) => aDictionary[a] > aDictionary[b] ? a : b);
    return maxKey;
}

// Example usage:
let myObject = {'Alice': 90, 'Bob': 85, 'Charlie': 95};
let result = bestScore(myObject);
console.log(result);
