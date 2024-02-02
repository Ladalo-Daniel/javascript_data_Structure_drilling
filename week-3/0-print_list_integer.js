// Write a function that prints all integers of a list.

// Prototype: def print_list_integer(my_list=[]):
// Format: one integer per line. See example
// You are not allowed to import any module
// You can assume that the list only contains integers
// You are not allowed to cast integers into strings
// You have to use str.format() to print integers


//======SOLUTION=======//

function print_list_integer(my_list) {
    //    return my_list.forEach(element => {
    //      console.log(element)
    //    });

    // return my_list.map(ele =>{
    //     console.log(ele * 2)
    // })

    // for (const i in my_list) {
    //     console.log(i)
    // }

    // for(let i = 0; i < my_list.length; i++){
    //     const item = my_list[i]
    //     if(Number.isInteger(item)){
    //         console.log(`${item}`)
    //     } else{ return `${item}: Not allowed`}
    // }

    for (const item of my_list) {
        console.log(item)
        
    }

}

const list = [1, 2, 3, 4, 5, 6, 7]
const list2 = ["1", "2", "3", "4"]

console.log(print_list_integer(list))