// Create a program that outputs all odd, positive numbers less than 100, starting from 1, such as 1, 3, 5, 7, 9, 11, and so on.

function oddNumber() {

    for (let count = 1; count < 100; count += 2) {
        console.log(count);
    }
}
oddNumber();