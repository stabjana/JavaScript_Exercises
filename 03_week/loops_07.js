/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */

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

/*
Margits solution:                   // command + D (select all occurences )  ----- irgendwo hier ist ein fehler wahrscheinlich tippfehler

function myFunction() {

    let sum = 0;
    let smallest = Infinity;
    let biggest = -Infinity;
    let count = 10;

    for (let counter = 0; counter < count; counter++);
    let input = +prompt('Number?');
    sum += input;

    if (input < smallest) {
        smallest = input;
    }
    if (input > biggest) {
        biggest = input;
    }
    const average = sum / count;
    console.log(`Sum : ${sum}). Average of numbers: ${average}. Smallest: ${smallest}. Biggest: ${biggest}`);

}
myFunction();
