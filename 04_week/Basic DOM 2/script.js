/* 
Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

const input = document.querySelector('#fruitInput');
const button = document.querySelector('#addFruitBtn');
const list = document.querySelector('#fruitList');

function fruitList() {
    console.log(input.value);
    // we check if the value is there from the selector -- .value braucht es um den Inhalt des Feldes zu erhalten und nicht das Feld an sich
    const newElement = document.createElement('li'); // we make a new variable for creating a new element: list-item

    // muss innerhalb stehen weil die Variable sonst überschrieben würde und dann ändert sich die anzahl der Listeneinträge nicht mehr nach dem ersten Mal. Es soll aber für jede eingabe ein neues ListenElement erstellt werden und dafür muss die Variable jedes Mal neu erstellt werden
    newElement.textContent = input.value; // then we write the input VALUE to the new element with the method changing the text content

    list.appendChild(newElement); // then we create a new list item to the ul list which selection (from the selector id) is stored in the list-variable

    input.value = ''; // input is a special case, it doesnt have text content, it has values
}
button.addEventListener('click', fruitList);
// button = variable siehe oben, dann wird die function mit der methode EventListener gecallt.



/*
const newElement = document.createElement('div');
newElement.textContent = 'New Child';
parentElement.appendChild(newElement);

const getElement = querySelector('#fruitInput')
const newElement = document.createElement('li');

function addTheFruit() {
    newElement.textContent = 'li'
    ul.El
    newElement = getElement;
}
    */