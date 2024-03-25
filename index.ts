#! usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number
// 2) user input - for guessing a number
// 3) compare user input with computer generated number and show result

const randomnumber = Math.floor(Math.random() * 6 +1 )

const answers = await inquirer.prompt([
    {name : "userguessednumber",
    type : "number",
    message : "Please guess a number between 1 - 6",
},
])
if(answers.userguessednumber === randomnumber)
{
    console.log("Congratulations!! You guessed a right number")
}else {
   console.log("You guessed a Wrong number");
}
