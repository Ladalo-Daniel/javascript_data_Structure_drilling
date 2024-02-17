// Write a function that returns the weighted average of all integers tuple (<score>, <weight>)

// Prototype: def weight_average(my_list=[]):
// Returns 0 if the list is empty
// You are not allowed to import any module



//========SOLUTION===========//

function weight_average(my_list=[]){
    if(my_list.length < 1){
        return 0
    }
  
    const totalScore = my_list.reduce((sum, [score, weight]) => sum + score * weight, 0)
    console.log(totalScore)

    const totalWeight = my_list.reduce((sum, [, weight]) => sum + weight, 0)
    console.log(totalWeight)


    if(totalWeight === 0){
        return 0
    }

    return totalScore / totalWeight



}


const list = [
    [80, 2],  // score 80 with weight 2
    [90, 3],  // score 90 with weight 3
    [75, 1]   // score 75 with weight 1
];

console.log(list)


console.log(weight_average(list))