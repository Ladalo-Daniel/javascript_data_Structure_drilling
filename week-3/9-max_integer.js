// Write a function that finds the biggest integer of a list.

// Prototype: def max_integer(my_list=[]):
// If the list is empty, return None
// You can assume that the list only contains integers
// You are not allowed to import any module
// You are not allowed to use the builtin max()


//SOLUTION==========//

function max_integer(my_list =[]){
   if(!my_list || my_list.length === 0){
    return null
   }

//    return Math.max(...my_list)

//FOR LOOP//

let maxValue = my_list[0]

for(let i = 0; i < my_list.length; i++){
    const eachInterger = my_list[i]

    if(eachInterger > maxValue){
        maxValue = eachInterger
    }
}

return maxValue

}

const test1 = [1, 2, 3, 4, 80]
const test2 = []

console.log(max_integer(test1))
console.log(max_integer(test2))