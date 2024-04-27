import inquirer from "inquirer";
let myBalance = 20000;
let mypin = 1028;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinAns.pin === mypin) {
    console.log("your pin is correct log in suceesfull");
}
else {
    console.log("incorrect pin! try again.");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "select an operation",
        choices: [
            "withdrow amount",
            "balance inquiry",
            "fastcash",
            [1000, 2000, 5000, 10000, 15000, 20000, 25000],
        ],
    },
]);
console.log("fastcash");
if (operationAns.operation === "withdrow amount") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "enter amount",
        },
    ]);
    if (amountAns.amount > myBalance) {
        console.log("insuffisiant balance");
    }
    // = , -=, +=
    myBalance -= amountAns.amount;
    console.log("your remaining balance is", myBalance);
    console.log("thank you for transaction");
}
else if (operationAns.operation === "balance inquiry") {
    console.log("your current balance is", +myBalance);
}
let fastcashAns = await inquirer.prompt([
    {
        name: "fastcash",
        type: "list",
        message: "enter amount",
        choices: [1000, 2000, 5000, 10000, 15000, 20000, 25000],
    },
]);
if ((myBalance -= fastcashAns.fastcash)) {
    console.log("transaction successfull");
}
else if (fastcashAns.fastcash > myBalance) {
    console.log("insuffisiant balance");
}
;
{
    console.log("your remaining balance is", myBalance);
}
;
