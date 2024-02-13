// Write a function that adds all unique integers in a list (only once for each integer).

// Prototype: def uniq_add(my_list=[]):
// You are not allowed to import any module


const uniq_add = (my_list=[]) => {
    if(!my_list){
        return new Error("No list provided!")
    }

    let uniqueElements = new Set()

    for(let element of my_list){
        uniqueElements.add(element)
    }

    let resultSum = 0;

    for(let uniqueEle of uniqueElements){
        resultSum = resultSum + uniqueEle
    }

    return resultSum
}





const my_list = [1, 2, 3, 4, 2, 9, 3, 7]


console.log(my_list)
console.log(uniq_add(my_list))











//========OR============//

function uniqAdd(myArray) {
    // Create an array to store unique integers
    let uniqueArray = [];
  
    // Iterate through the elements in the array
    for (let element of myArray) {
      // If the element is not already in the unique array, add it
      if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
      }
    }
  
    // Calculate the sum of unique integers in the array
    let resultSum = 0;
    for (let uniqueElement of uniqueArray) {
      resultSum += uniqueElement;
    }
  
    return resultSum;
  }
  
  // Example usage:
  let myArray = [1, 2, 3, 2, 4, 3, 5];
  let result = uniqAdd(myArray);
  
  console.log("Original Array:", myArray);
  console.log("Sum of Unique Integers:", result);
  



  //========OR=========//

  function uniqAdd(myArray) {
    // Create an array to store unique integers
    let uniqueArray = [];
  
    // Helper function to check if an element is already in the array
    function isElementInArray(element, array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
          return true;
        }
      }
      return false;
    }
  
    // Iterate through the elements in the array
    for (let i = 0; i < myArray.length; i++) {
      let currentElement = myArray[i];
  
      // If the element is not already in the unique array, add it
      if (!isElementInArray(currentElement, uniqueArray)) {
        uniqueArray.push(currentElement);
      }
    }
  
    // Calculate the sum of unique integers in the array
    let resultSum = 0;
    for (let i = 0; i < uniqueArray.length; i++) {
      resultSum += uniqueArray[i];
    }
  
    return resultSum;
  }
  
  // Example usage:
  let myArray2 = [1, 2, 3, 2, 4, 3, 5];
  let result2 = uniqAdd(myArray2);
  
  console.log("Original Array:", myArray2);
  console.log("Sum of Unique Integers:", result2);
  