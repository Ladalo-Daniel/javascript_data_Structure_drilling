// Write a function that returns a set of all elements present in only one set.

// Prototype: def only_diff_elements(set_1, set_2):
// You are not allowed to import any module



//========SOLUTION=========//

const only_diff_elements = (set_1=[], set_2=[]) => {

    const diffElements1 = []
    const diffElements2 = []

    
    //Helper function

    const isInArray = (element, array) => {
        for(let ele of array){
            if(ele === element){
                return true
            }
        }

        return false
    }

   

    
}


// const set1 = [1, 2, 3, 4, 5]
// const set2 = [6, 2, 3, 7, 5]


// console.log(set1)
// console.log(set2)
// console.log(only_diff_elements(set1, set2))










//=========OR=========//


function onlyDiffElements(set1, set2) {
    // Create empty arrays to store elements unique to each set
    let diffArray1 = [];
    let diffArray2 = [];
  
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
      // Check if the element is not in the second set
      if (!isInArray(element, Array.from(set2))) {
        // Add the unique element to diffArray1
        diffArray1.push(element);
      }
    }
  
    // Iterate through elements in the second set
    for (let element of set2) {
      // Check if the element is not in the first set
      if (!isInArray(element, Array.from(set1))) {
        // Add the unique element to diffArray2
        diffArray2.push(element);
      }
    }
  
    // Combine the two arrays to get all elements present in only one set
    let resultArray = diffArray1.concat(diffArray2);
  
    // Convert the array to a Set to remove duplicates
    let resultSet = new Set(resultArray);
  
    return resultSet;
  }
  
  // Example usage:
  let set1 = new Set([1, 2, 3, 4, 5]);
  let set2 = new Set([3, 4, 5, 6, 7]);
  
  let resultSet = onlyDiffElements(set1, set2);


  const set_1 = ["Python", "C", "Javascript"] 
  const set_2 = [ "Bash", "C", "Ruby", "Perl" ]
  const od_set = console.log(onlyDiffElements(set_1, set_2)
  )

  
  console.log("Set 1:", set1);
  console.log("Set 2:", set2);
  console.log("Elements Present in Only One Set:", resultSet);
  