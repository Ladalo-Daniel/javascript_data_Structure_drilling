// Write a program that prints numbers from 0 to 99.

// Numbers must be separated by ,, followed by a space
// Numbers should be printed in ascending order, with two digits
// The last number should be followed by a new line
// You can only use no more than 2 print functions with string format
// You can only use one loop in your code
// You are not allowed to store numbers or strings in a variable
// You are not allowed to import any module


//SOLUTION1========

function printNumbersWithSaparators(){

   for( let i = 0; i <= 99; i++){

    const saparator = ( i < 99) ? "," : "\n"

    // console.log(`${i.toString().padStart(2, "0")}${saparator}`)

   }
}

printNumbersWithSaparators()



//SOLUTION2========

function printDecimalAndHexadecimal2(){
    let output = "";

    for( let i = 0; i <= 99; i++){
        const number = (i < 10) ? "0" + i : i;
        const saparator = (i < 99) ? ", " : "\n";
        output = output + number + saparator;
    }

    console.log(output)
}

printDecimalAndHexadecimal2()