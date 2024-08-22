// Create a function named isEven that takes a number as a parameter and returns true if the number is even, and false if the number is odd.

function isEven(number) {
    return number % 2 === 0; // true and false will show automatically
}

// const isEven = (number) => number % 2 === 0;  ---> Variable that carries a function


/* let evenOddCheck = number % 2;
let storage;
 
if(evenOddCheck == 0){
storage = true; 
}
else {
storage = false;
}
return storage;
*/

// sample usage - do not modify
console.log(isEven(4)); // Returns true
console.log(isEven(7)); // Returns false