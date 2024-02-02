// Write a function that retrieves an element from a list like in C.

// Prototype: def element_at(my_list, idx):
// If idx is negative, the function should return None
// If idx is out of range (> of number of element in my_list), the function should return None
// You are not allowed to import any module
// You are not allowed to use try/except

//=======SOLUTION=======//

const element_at = (my_list, idx) => {
    if( idx < 0 || idx >= my_list.length){
        return null;
    }

    return my_list[idx]
     
    //OR

//    for(let i = 0; i < my_list.length; i++){
//     if(i === idx){
//         return my_list[i]
//     }
//    }

}

//Usage;
my_list = [1, 2, 3, 4, 5]

console.log(element_at(my_list, 4));