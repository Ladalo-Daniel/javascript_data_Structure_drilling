// Write a function that removes all characters c and C from a string.

// Prototype: def no_c(my_string):
// The function should return the new string
// You are not allowed to import any module
// You are not allowed to use str.replace()


//=======SOLUTION==========//

function no_c(string){
   let resultString = ""

   for(let i = 0; i < string.length; i++){
    const char = string[i]

    if(char.toLowerCase() !== "c"){
        resultString = resultString + char
    }
   }

   return resultString
}

const result1 = "School"
const result2 = "Chicago"
const result3 = "Church"

console.log(no_c(result1))
console.log(no_c(result2))
console.log(no_c(result3))
