#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //usd$
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "select option",
        type: "list",
        choices: ["withdraw", "check balance", "fast cash"]
    }
]);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number"
        }
    ]);
    if (amountAns.amount > myBalance) {
        console.log("Insufficient balance");
    }
    // = += -=
    else {
        myBalance -= amountAns.amount;
        console.log(`your remaining Balance is" + \n${myBalance}`);
    }
}
if (operationAns.operation === "fast cash") {
    let fast = await inquirer.prompt([
        {
            name: "fastcash",
            message: "selaect your option",
            type: "list",
            choices: [1000, 2000, 5000, 10000,]
        }
    ]);
    myBalance -= fast.fastcash;
    console.log(`you have sucessfully withdrwa
             ${fast.fastcash}\n your remaining balance is\n${myBalance}`);
}
else if (operationAns.operation === "check balance") {
    console.log(`your remaining balance is ${myBalance}`);
}
else {
    console.log("sorry incorrect pin");
}