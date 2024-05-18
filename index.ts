#! /usr/bin/env node
import inquirer from "inquirer";

const answer: {
    firstNumber: number,
    secondNumber: number,
    operator: string
} = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

const { firstNumber, secondNumber, operator } = answer;

if (firstNumber !== undefined && secondNumber !== undefined && operator) {
    let result: number = 0;

    if (operator === "Addition") {
        result = firstNumber + secondNumber;
    } else if (operator === "Subtraction") {
        result = firstNumber - secondNumber;
    } else if (operator === "Multiplication") {
        result = firstNumber * secondNumber;
    } else if (operator === "Division") {
        if (secondNumber !== 0) {
            result = firstNumber / secondNumber;
        } else {
            console.log("Division by zero is not allowed.");
            process.exit(1);
        }
    }

    console.log("Your result is:", result);
} else {
    console.log("Enter Valid Input");
}
