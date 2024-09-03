"use strict"

let balance = 1000; // wenn nichts eingegeben wird, crash
let input = 1;

function main() {

    while (input > 0) {

        input = +prompt('What do you want to do? To check balance enter 1, to put a deposit enter 2, for withdrawing enter 3, or enter 0 to exit.');

        if (input === 1) {
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
document.querySelector(`#mybutton`).onclick = function () {
    main();
}
// main();

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
