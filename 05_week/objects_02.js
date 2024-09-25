/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

// Your code here

const library = [{ title: "Hamlet", author: "Shakespeare", yearPublished: 1601 }, { title: "Measure for Measure", author: "Shakespeare", yearPublished: 1604 }];


/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
console.log(library[0]);
library[1].yearPublished = 1623;
console.log(library[1]);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
library[0].genres = [''];
library[0]['isAvailable'] = Boolean;
console.log(library[0]);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
function Book(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
}
const book3 = new Book("Romeo and Juliet", "Shakespeare", 1630, "Drama");
library.push(book3);
console.log(library);


/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
function createBook(title, author, yearPublished, genres) {
    let userInput = prompt('Please enter title, author, yearPublished & genre to the box, separated with a comma, followed by one space: ');
    const dataArray = userInput.split(','); // split makes it an array, separated by commas
    let userObject = new Book(dataArray[0], dataArray[1], dataArray[2], dataArray[3]); /* calling the function with the single values of the new Book (Object) */
    return (userObject);

    /* first approach:
    function createBook(title, author, yearPublished, genres) {
    const book4 = new Book(prompt('Please enter title, author, yearPublished & genre to the box, separated with a comma, followed by one space: ', title, author, yearPublished, genres));
 
     return (book4);} */
}
createBook();

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

const jsonString = JSON.stringify(library); /* transforms the Object into a json string */
console.log(jsonString);

const jsObject = JSON.parse(jsonString);/* transforms the string into an js object */
console.log(jsObject[0].title);