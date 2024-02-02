// Write a program that prints the number of and the list of its arguments.
// The output should be:
// Number of argument(s) followed by argument (if number is one) or arguments (otherwise), followed by
// : (or . if no arguments were passed) followed by
// a new line, followed by (if at least one argument),
// one line per argument:
// the position of the argument (starting at 1) followed by :, followed by the argument value and a new line
// Your code should not be executed when imported
// The number of elements of argv can be retrieved by using: len(argv)
// You do not have to fully understand lists yet, but imagine that argv can 
// be used just like a C array: you can use an index to walk through it. 
// There are other ways (which will be preferred for future project tasks), if you know them you can use them.

//=========SOLUTION=========//

function argument_checks(arg) {
     if(!arg){
      throw new Error("It seems you have not provided arguments, oya go do that Asap!")
     }
    const output = arg.split(" ")

  const numArguments = output.length

  console.log(`Number of argument(s): ${numArguments }${numArguments === 0 ? '.' : ':'}`);

  if(numArguments > 0){
    output.forEach((arg, idx) => {
      console.log(`${idx + 1}: ${arg}`);
    })
  }

  }

const result1 = "Hello How are you today!"

console.log(argument_checks(result1))


const result2 = {
  name : "Ladalo",
  email : "ladalo@gmail.com",
  address : "Garki, Abuja"
}

const result3 = [
  users = [
    {
      name : "Ladalo",
      email : "ladalo@gmail.com",
      address : "Garki, Abuja"
    },
    {
      name : "Ladalo",
      email : "ladalo@gmail.com",
      address : "Garki, Abuja"
    },
    {
      name : "Ladalo",
      email : "ladalo@gmail.com",
      address : "Garki, Abuja"
    },
    {
      name : "Ladalo",
      email : "ladalo@gmail.com",
      address : "Garki, Abuja"
    }
  ],

  posts = [
    {
      title: "Making Heaven",
      explanation: "How to make it to Heaven at last needs you to be watchful and prayerful"
    },
    {
      title: "Making Heaven",
      explanation: "How to make it to Heaven at last needs you to be watchful and prayerful"
    },
    {
      title: "Making Heaven",
      explanation: "How to make it to Heaven at last needs you to be watchful and prayerful"
    },
    {
      title: "Making Heaven",
      explanation: "How to make it to Heaven at last needs you to be watchful and prayerful"
    }
  ]
]



const data = [
  users = [
    {
      name : "Ladalo",
      email : "ladalo@gmail.com",
      address : "Garki, Abuja"
      [
        products = [
          {
            id: 1,
            name: "Nike",
            category: "gra",
            price: "N5000"
          },
          {
            id: 2,
            name: "Zogo",
            category: "gra",
            price: "N7000"
          },
          {
            id: 3,
            name: "Crama",
            category: "gra",
            price: "N9000"
          }
        ]
      ]
    },
  ]
  ]

// console.log(argument_checks(result3.map((re, _) => {
//   console.log(re.map((r, _) =>{
//     console.log(r.name, r.email, r.address, r.title, r.explanation)
//   }))
// })))

// console.log(argument_checks(data.map((p, i) => {
//   console.log(`${i}: ${p.users}`)
// })))






// Get the number of arguments
const numArguments = process.argv.length - 2; // Subtract 2 to exclude "node" and the script name

// Print the number of arguments and the list of arguments
// console.log(`Number of argument(s): ${numArguments}${numArguments === 0 ? '.' : ':'}`);

// Print each argument and its position
if (numArguments > 0) {
  process.argv.slice(2).forEach((arg, index) => {
    console.log(`${index + 1}: ${arg}`);
  });
}

// Print a new line
console.log();