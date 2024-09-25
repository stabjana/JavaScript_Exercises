// Exerice 1: Determine array length and conditional check   
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
/*
Create a function called myAlphabetLength to log the length of the array.
Also include an if-statement to check if the array length is less than 5.
Expected outcome: 
"The length of myAlphabet: 7"
"Array length is greater than or equal to 5."
*/
// Write your function here
let count = 0;
myAlphabet.forEach(() => count++);
console.log("The length of myAlphabet: ", count);
if (count <= 5) {
    console.log("Array length is greater than or equal to 5.");
}

// Exercise 2: Iterate over array and log each item with its index
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
/*
Log each planet in the array along with its index.
Expected outcomes:
"Planet: Mercury, Index: 0"
...
"Planet: Jupiter, Index: 4"
*/
// Write your code here
planets.forEach((element, index) => console.log(`Planet: ${element}`, `Index:  ${index}`));
// anders geschrieben: (o - function)
// planets.forEach((element, index) => console.log(`Planet: ${element}`, `Index:  ${planets.indexOf(element)}`));

/*
forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
Performs the specified action for each element in an array.
*/

// Exerice 3: Log array items with their types
const wowDatatypes = [1, 'text', false, null, undefined];

/*
Iterate over the array, logging each item, its index, and data type.
Expected outcomes:
"Item: 1, Index: 0, Type: number"
...
"Item: undefined, Index: 4, Type: undefined"
*/
// Write your code here
function dataTypes() {
    for (let index = 0; index < wowDatatypes.length; index++) {
        const element = wowDatatypes[index];
        console.log(`Item: ${element}`, `Index: ${index}`, `Type: ${typeof element} `);
    }
}
dataTypes();

wowDatatypes.forEach((item, index) => console.log(`Item: ${item}, Index: ${index}, Type: ${typeof item}`));

// Exerice 4: Log array items without using a loop
let myArr = [1, 2, 'One', true];
/*
Log each item in this array without explicitly using a loop.
Expected outcomes: 1, 2, "One", true
*/
// Write your code here
console.log(myArr.toString());

// Exerice 5: Find common courses between two students
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
/*
Identify and log any courses common to both student1Courses and student2Courses.
Expected outcome: "Common course: Programming"
*/
// Write your code here
const course = student1Courses.filter(element => student2Courses.includes(element));
console.log(`Common course: ${course}`); // hier wird als parameter eine funktion übergeben, die in einer 2. loop nach derSelben Variable "element" sucht. Wert wird dann in variable "course" gespeichert. Return value(of filter): A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.



// Exerice 6: Log each letter of array items
let furniture = ['Table', 'Chairs', 'Couch'];
/*
For each item in the furniture array, log every letter.
Expected outcomes:
"Letters in 'Table': T, a, b, l, e"
...
"Letters in 'Couch': C, o, u, c, h"
*/
// Write your code here
furniture.forEach((element) => spellWord(element));

function spellWord(word) {
    console.log(`Letters in ${word}: ${word.split('').join(', ')}`);
}

// Exerice 7: Filter positive temperatures
let temperatures = [-5, 3, -1, 22, -40, 5, 18];
/*
Write the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
Expected outcome: [3, 22, 5, 18]
*/
// Write your code here
console.log(temperatures.filter((item) => item > 0));


// Exerice 8: Filter Odd Years
/*
Complete the function getOddYears such that it returns all the years that are odd from the years parameter it receives.
Expected outcomes:
getOddYears([2019, 2020, 2021]) -> [2019, 2021]
getOddYears([2000, 2015, 2018, 2020]) -> [2015]
*/

// Write your code here
function getOddYears(years) {
    console.log(years.filter((item) => item % 2 == 1));
}
getOddYears([2019, 2020, 2021]);
getOddYears([2000, 2015, 2018, 2020]);

// Sample usage - Uncomment to test your function
// console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
// console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]