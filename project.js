// 1. Deposit some money
// 
const prompt = require("prompt-sync")();

const deposit = () => {
    while (true){
    const depositAmount = prompt ("Enter an Deposit Amount: ");
    const numberDepositAmount = +depositAmount; // we can use the same type casting with parseInt(),parseFloat(),Number() |

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Invalid deposit amount, Try again");
    }
    else {
        return numberDepositAmount;
    };
};
};
const DepositAmount = deposit();
console.log(DepositAmount);