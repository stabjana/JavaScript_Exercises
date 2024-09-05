/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

const text = document.getElementById('content')

function textUpdate() {
    console.log(text);
    text.textContent = 'Hello World!'

}