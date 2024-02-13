// Write a function that returns the number of keys in a dictionary.

// Prototype: def number_keys(a_dictionary):
// You are not allowed to import any module


//============SOLUTION=============//

const number_keys = (obj={}) => {

    let count = 0
    
    for(let key in obj){
       if(obj.hasOwnProperty(key)){
        count++
       }
    }

    
    return count
}


const obj1 = {
    name: "Ladalo",
    age: "25",
    school: "NOUN"
}


console.log(number_keys(obj1))