// alert('Wow, its working!');

const myID = document.getElementById('myId')
const myIdQ = document.querySelector('#myId')

const myClass = document.getElementsByClassName('myClass')
const myClassQ = document.querySelector('.myClass')
const myClass2 = document.querySelectorAll('.myClass')

const myParagraph = document.getElementsByTagName('p')



console.log(myId);
console.log(myIdQ);

console.log(myClass);
console.log(myClassQ);
console.log(myClass2);

console.log(myParagraph);

const button = document.querySelector('#whatever')
console.log(button);

const headline = document.querySelector('h1')



function myFunction() {
    console.log('this was triggert by html');
    headline.textContent = 'fixed it'
}


function myFunction2() {
    console.log(headline.textContent);
    headline.textContent = 'what I just did'
    button.textContent = 'FIX IT!'
}

button.addEventListener('click', myFunction2) // needs a const declaration

document.querySelector('#whatever').addEventListener('click', myFunction2) // function is defined inside and not
// the second is missing a variable

