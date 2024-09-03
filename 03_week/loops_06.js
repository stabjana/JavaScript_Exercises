// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

function ask() {
    let count = 0;
    let sum = 0;
    let inputNumber = 0;

    while (true) {
        inputNumber = +prompt('Give me a number.');
        sum += inputNumber;
        count++;
        let youWant = prompt('Do you want to continue giving numbers? (y/n)');
        if (youWant == 'n') {
            break;
        }
    }
    alert(sum / count);

}
ask();

/*

Margits Lösung:

function averageNumber() {
    let sum = 0;
    let count = 0;

    while (true) {
        let input = +prompt('Enter number');
        sum += input;
        count++;

        let shouldContinue = propmt('Do you want to continue? y/n');

        if (shouldContinue == 'n') {
            break;
        }
    }
    let average = sum / count;
    console.log(average);
}

*/