// Write a function that replaces all occurrences of an element by another in a new list.

// Prototype: def search_replace(my_list, search, replace):
// my_list is the initial list
// search is the element to replace in the list
// replace is the new element
// You are not allowed to import any module


function search_replace(my_list=[], search, replace){
    // if(my_list.length < 1 || my_list.length >= search || my_list.length >= replace){
    //     return my_list
    // }

    let newList = []

    for(let i = 0; i < my_list.length; i++){
        const eachItem = my_list[i]

        if(eachItem === search){

             newList.push(replace)
        }
         else{
            newList.push(eachItem)
        }
      }

    return newList
}


//Use case

const my_list = [1, 2, 3, 4, 2, 9, 3, 7]
const search = 3
const replace = 6

console.log(my_list)
console.log(search_replace(my_list, search, replace))