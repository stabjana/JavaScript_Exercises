const age = 30;
const Name = 'Basilisk';
const isStudent = true;
const hobbies = ['Tennis', 'Trampoline', 'future guessing']; //Declaration and Assignment of the variables
// string array is seperated by commas

const info = {
    nameOfSchool: 'Hogwarts',    //Creating an Object trequires curly brackets
    grade: 13
}
// I used https://www.geeksforgeeks.org/creating-objects-in-javascript-4-different-ways/#using-object-literals to help me out with that.
/* info object is declared like a variable, because it contains variables. Curly brackets are showing where the dictionary starts and ends, so it will be read and the variables are initiated */

console.log(age);
console.log(Name);
console.log(isStudent);
console.log(hobbies);
console.log(info);

console.log(typeof age, typeof Name, typeof isStudent, typeof hobbies, typeof info);



/*
- Create a variable named age and assign it an integer value.
- Create a variable named name and assign it a string value.
- Create a variable named isStudent and assign it a boolean value.

- Create a variable named hobbies and assign it an array containing a few string values (e.g., hobbies).

- Create an info object with two properties: schoolName (a string) and grade (an integer).

- Use console.log() to print each variable to the console.

- Use the typeof operator to check the data type of each variable and print the result using console.log(). */