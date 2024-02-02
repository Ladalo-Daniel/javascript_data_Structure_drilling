// Write a function that replaces an element of a list at a specific position (like in C).

// Prototype: def replace_in_list(my_list, idx, element):
// If idx is negative, the function should not modify anything, and returns the original list
// If idx is out of range (> of number of element in my_list), the function should not modify anything, and returns the original list
// You are not allowed to import any module
// You are not allowed to use try/except


//==========SOLUTION==========//

function replace_in_list(my_list, idx, element){
    if(idx < 0 || idx >= my_list.length){
        return my_list;
    }

    // my_list[idx] = element
    // return my_list

    //==OR==//
    for(let i = 0; i < my_list.length; i++){
        if(my_list[i] === idx){
            my_list[idx] = element
            return my_list
        }
    }
}

//useage

const my_list = [1, 2, 3, 4, 5]
const idx = 3
const element = 9

console.log(replace_in_list(my_list, idx, element))