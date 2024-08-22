// Write a function named findMax that takes three numbers as parameters and returns the largest of the three.

function findMax(number1, number2, number3) {
   return Math.max(number1, number2, number3);
}

// const findMax = (a, b, c) => Math.max(a, b, c)         -> function type will stay the same!!! functions need to be constant, with the arrow function its automatically const

// sample usage - do not modify
console.log(findMax(3, 7, 2)); // Returns 7
console.log(findMax(10, 5, 15)); // Returns 15