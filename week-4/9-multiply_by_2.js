// Write a function that returns a new dictionary with all values multiplied by 2

// Prototype: def multiply_by_2(a_dictionary):
// You can assume that all values are only integers
// Returns a new dictionary
// You are not allowed to import any module


//=========SOLUTION==============//


const multiply_by_2 = (a_dictionary) => {
    let newObj = Object.assign({}, a_dictionary)

    for(let key in a_dictionary){
        if(a_dictionary.hasOwnProperty(key)){
            newObj[key] = a_dictionary[key] * 2
        }
    }

    return newObj


}


const obj = { a: 1, b:2, c: 3, d: 4, e: 5}
console.log(obj)

console.log(multiply_by_2(obj))