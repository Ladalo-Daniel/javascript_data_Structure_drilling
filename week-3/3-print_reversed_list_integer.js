// Write a function that prints all integers of a list, in reverse order.

// Prototype: def print_reversed_list_integer(my_list=[]):
// Format: one integer per line. See example
// You are not allowed to import any module
// You can assume that the list only contains integers
// You are not allowed to cast integers into strings
// You have to use str.format() to print integers


//========SOLUTION========//

const print_reversed_list_integer = (my_list) => {
    // for(let i = my_list.length - 1; i >= 0; i--){
    //     const item = my_list[i]
    //     console.log(item)
    // }

    //==OR==//

    // let reversedString = '';
    // for (let i = my_list.length - 1; i >= 0; i--) {
    //     reversedString += `${my_list[i]}\n`;
    // }
    // return reversedString;

    //==OR==//

    const reversedString2 = my_list.reverse().join('\n');
    console.log(reversedString2);

}


const my_list = [1, 2, 3, 4, 5]


console.log(print_reversed_list_integer(my_list))