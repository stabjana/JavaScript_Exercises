/* Task:
Basic ATM simulator

Create a function called checkBalance to show the current balance to the user.

Write a function called deposit that takes an amount of money to add to the balance. If the amount is positive, add it to the balance.

Write a function called withdraw that takes an amount of money to subtract from the balance. It should only allow the withdrawal if the amount is positive and does not exceed the current balance.

Create a main function to repeatedly ask the user what they want to do (check balance, deposit, withdraw, or exit) until they choose to exit.
*/

"use strict"

let balance = 1000;
let input = 1;

function main() {

    while (input > 0) {

        input = +prompt('What do you want to do? To check balance enter 1, to put a deposit enter 2, for withdrawing enter 3, or enter 0 to exit.');

        if (input === 1) {          // switch
            checkBalance();
        }
        if (input === 2) {
            deposit();
        }
        if (input === 3) {
            withdraw();
        }
        if (input === 0) {
            break;
        }

    }
}
main();

function withdraw() {
    let amount = +prompt('How much?');

    if (amount > balance) {
        alert('Your balance is not high enough.');
    }
    if (balance > 0) {
        balance = balance - amount;
        alert(`The withdrawal of ${amount} is made.`);
    }
}

function deposit() {
    let amount = +prompt('How much?');
    if (amount > 0) {
        balance = balance + amount;
        alert(`The deposit of ${amount} is made.`);
    }
}

function checkBalance() {
    alert(`Your current balance is: ${balance}`);
}

// READY ON WEDNESDAY!!! parseFloat('123.456'); // Returns 123.456
// parseFloat('abc123'); // Returns NaN