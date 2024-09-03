// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.

// const prompt = require('prompt-sync')();

function evenNumbers() {
    let count = 0;            // it declares not only the value, it also defines the Type --- value 0 and a number
    for (let i = 0; i < 20; i++) {
        let inputNumber = prompt('Enter a number');         // beim testen hab ich aus versehen buchstaben eingegeben aber es kam kein fehler auch nicht mit +prompt
        if ((inputNumber % 2) == 0) {
            count++;
        }
    }
    console.log(count);
    //alert(count);
}
evenNumbers();


/* Lösung von Margit:

function evenNumbers() {
    let evenCount = 0;

    for (let counter = 0; counter < 20; counter++) {
        let input = Number(prompt('Enter a number'));

        if (input % 2 === 0) {
            evenCount++;
        }
    }
    console.log('There was ', evenCount + ' even numbers');
}
evenNumbers();
*/