// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.

function evenNumbers() {
    let count = 0;
    for (let i = 0; i < 20; i++) {
        let inputNumber = prompt('Enter a number'); // beim testen hab ich aus versehen buchstaben eingegeben aber es kam kein fehler auch nicht mit +prompt
        if ((inputNumber % 2) == 0) {
            count++;
        }
    }
    alert(count);
}
evenNumbers();

/*
function numberOfEvenNumbers() {
    let count = 0;
    while (count == even)
        +prompt // every time the number is even you increase the count
}
numberOfEvenNumbers();
*/