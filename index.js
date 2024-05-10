#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter your sentence or word to count"
    },
]);
const letters = answer.sentence.trim().split(``);
console.log(letters);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`your word count is ${words.length}`);
console.log(`your letter count is ${letters.length}`);
