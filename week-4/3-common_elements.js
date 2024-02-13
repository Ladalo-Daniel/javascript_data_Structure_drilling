// Write a function that returns a set of common elements in two sets.

// Prototype: def common_elements(set_1, set_2):
// You are not allowed to import any module


//==========SOLUTION==========//

function common_elements(set_1=[], set_2=[]){

    let commonSet = []

    const allElements = set_1.concat(set_2)

    for( element of allElements ){
        if(!commonSet.includes(element)){
            commonSet.push(element)
        }
    }

    return commonSet
}


const set1 = [1, 2, 3, 4, 5]
const set2 = [6, 2, 3, 7, 5]


console.log(set1)
console.log(set2)
console.log(common_elements(set1, set2))




//============or=============//



function commonElements(set1, set2) {
    // Create an empty array to store common elements
    let commonArray = [];
  
    // Helper function to check if an element is in the array
    function isInArray(element, array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
          return true;
        }
      }
      return false;
    }
  
    // Iterate through elements in the first set
    for (let element of set1) {
      // Check if the element is also in the second set
      if (isInArray(element, Array.from(set2))) {
        // Add the common element to the common array
        commonArray.push(element);
      }
    }
  
    // Convert the array to a Set to remove duplicates
    let commonSet = new Set(commonArray);
  
    return commonSet;
  }
  
  // Example usage:
  let set3 = new Set([1, 2, 3, 4, 5]);
  let set4 = new Set([3, 4, 5, 6, 7]);
  
  let resultSet = commonElements(set1, set2);
  
  console.log("Set 3:", set3);
  console.log("Set 4:", set4);
  console.log("Common Elements:", resultSet);
  