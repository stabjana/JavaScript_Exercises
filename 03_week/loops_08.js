// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

function howManyNumbers() {

    let smallest = Infinity;
    let biggest = -Infinity;
    let count = +prompt('How many numbers do you want too give?');

    while (count > 0) {
        let inputNumber = +prompt('Enter number');

        if (inputNumber > biggest) {
            biggest = inputNumber;
        }
        if (inputNumber < smallest) {
            smallest = inputNumber;
        }
        count--;
    }
    console.log(`This is the biggest number: ${biggest}, This is the smallest: ${smallest}`);
}
howManyNumbers();

/*
function tenNumbers() {
    let count = 0;
    let sum = 0;
    let minimum = Infinity, maximum = -Infinity; // Infinity is the biggest number ever and the minimum can be overwritten easily and the other way with the negative infinity

    while (count < 10) {
        let inputNumber = +prompt('Give me a number');
        sum += inputNumber;
        count++;


        if (inputNumber > maximum) {
            maximum = inputNumber;
        }
        if (inputNumber < minimum) {
            minimum = inputNumber;
        }
    }
    console.log('Sum: ', sum);
    console.log('Average: ', sum / count);
    console.log('Maximum number: ', maximum);
    console.log('Minimum number: ', minimum);
}
tenNumbers();