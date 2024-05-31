#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.redBright("\n<===== Welcome to Number Guessing Game Create by Nasir! =====>\n"));
const secretNumber = Math.floor(Math.random() * 10 + 1);
let myloop = true;
let attempts = 1;
while (myloop) {
    const userInput = await inquirer.prompt({
        type: 'number',
        name: 'userNumber',
        message: "Enter your number!"
    });
    let { userNumber } = userInput;
    console.log(`Your attempt No.${attempts}`);
    if (userNumber === secretNumber)
        wonMatch();
    if (userNumber > secretNumber)
        greaterNum();
    if (userNumber < secretNumber)
        lessNum();
    function wonMatch() {
        console.log(chalk.blue(`Congratulation! Your Guessed Number ${userNumber} is Correct!`));
        console.log(chalk.italic.yellow(`\nYou have attempted ${attempts} time to guess the right 
     number`));
        myloop = false;
    }
    function greaterNum() {
        console.log(chalk.white(`Your Guessed Number is Greater than Actual Number`));
        attempts++;
    }
    function lessNum() {
        console.log(chalk.green(`Your Guessed Number is Less than Actual Number`));
        attempts++;
    }
}
