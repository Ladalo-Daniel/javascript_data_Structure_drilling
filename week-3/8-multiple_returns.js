// Write a function that returns a tuple with the length of a string and its first character.

// Prototype: def multiple_returns(sentence):
// If the sentence is empty, the first character should be equal to None
// You are not allowed to import any module



//=====SOLUTION=====//

const multiple_returns = (sentence) => {

    if(!sentence || sentence.length === 0){
        return [0, null]
    }

    return [sentence.length, sentence[0]]
}

//use case

const test1 = multiple_returns("Hello world")
const test2 = multiple_returns("")

console.log(test1)
console.log(test2)