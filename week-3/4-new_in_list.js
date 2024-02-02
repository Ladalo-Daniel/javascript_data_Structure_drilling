// Write a function that replaces an element in a list at a specific position without modifying the original list (like in C).

// Prototype: def new_in_list(my_list, idx, element):
// If idx is negative, the function should return a copy of the original list
// If idx is out of range (> of number of element in my_list), the function should return a copy of the original list
// You are not allowed to import any module
// You are not allowed to use try/except

//========SPLUTION========//

function new_in_list(my_list, idx, element){
    // if(idx < 0 || idx >= my_list.length){
    //     return my_list
    // }
   //==1== Normall method//
    // const newArr = my_list.slice();

    // newArr[idx] = element;

    // return newArr


  //==2==Map method//

//   if(idx < 0 || idx >= my_list.length){
//      return [...my_list]
//   }

//   return my_list.map((arr, i) => (i === idx) ? element : arr)


  //==3==/For Loop/

  if(idx < 0 || idx >= my_list.length){
     return my_list
  }

  const newArray = []

  for(let i = 0; i < idx; i++){
   newArray.push(my_list[i])
  }

  newArray.push(element)

  for( let i = idx + 1; i < my_list.length; i++){
    newArray.push(my_list[i])
  }



  return newArray



  
   
}


//Use cases

const oriArr = [1, 2, 3, 4, 5]
const repNum = 3
const eleNum = 9

const result = new_in_list(oriArr, repNum, eleNum)

console.log(oriArr)
console.log(result)

// console.log(new_in_list(my_list))

// console.log(new_in_list(test1, 3, 9))