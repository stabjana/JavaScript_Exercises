/* Write a function named isInRange that takes a number as a parameter and returns true if the number is between 10 and 20 (inclusive), and false otherwise. */

function isInRange(number) {
    if (number >= 10 && number <= 20) {
        return 'true';
    }
    return 'false';
}

// Sample usage - do not modify

console.log(isInRange(15));  // Outputs: true
console.log(isInRange(5));   // Outputs: false
console.log(isInRange(20));  // Outputs: true