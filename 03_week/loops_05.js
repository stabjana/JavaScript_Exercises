// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

function averageNumbers() {

    let inputNumber = +prompt('Please enter a number bigger than zero to get the average value.');
    let storeValue = 0;
    let count = 0;

    while (inputNumber != 0) {
        if (inputNumber = '' || inputNumber == 0) {
            alert('Please enter a number, try again.');
            break;
        } else {
            inputNumber = +prompt('Please enter another number bigger than 0 or enter 0 to get the result.');  // doesn't work with 0 or empty or negative
            storeValue += inputNumber;
            count++;
        }
    }
    alert(storeValue / count); // better declare a variable first and then display the variable -- also to avoid directly mutating
}
averageNumbers();

/*

Lösung von Margit:

function calcAverage() {
    let sum = 0;
    let count = 0;

    do {
        let input = +prompt('Enter number (enter = to terminate): ');  // because its running it at least once ( 2 identical conditions that are doing different things )
        if (input !== 0) {
            sum += input;
            count++;   // count += 1
        }
    } while (input != 0);
    let average = sum / count;
    console.log(average);
}
make a string to a number: add  + || parseInt || parseFloat || Number()
*/