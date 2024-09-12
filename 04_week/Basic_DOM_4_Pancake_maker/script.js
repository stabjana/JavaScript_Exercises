
const pancakeBase = document.querySelector('#type'); // später variable überschreiben je nach auswahl // option is attribute of type.
const checkbox = document.querySelectorAll('input');
const output = document.querySelectorAll('#totalPrice');
// console.log(checkbox);
let totalPrice; // wird das jedesmal mit 0 überschrieben?

priceFunction(); // i put that because it should invoke automatically by not changing the input field, so that it takes the 5€ by defalut to the total price.

function customizeBase() {

    totalPrice += parseInt(pancakeBase.value);// convert string to a number
    // console.log(totalPrice); Das dropdown hat options und selectedIndex (sagt welcher selected ist, und davon kann man den text nehmen) // loop war nicht nötig
}

function checkBoxCheck() {
    for (let index = 0; index < checkbox.length; index++) {
        const element = checkbox[index];  // nimmt den checkbox wert und tut es in die Element variable
        if (element.checked === true) {
            totalPrice += parseInt(element.value); // convert string to a number
        }
    }
}

function priceDisplay() {

    output[0].textContent = '$' + totalPrice;
    output[1].textContent = '$' + totalPrice;
    // output[2].textContent = '$' + totalPrice;

}

function priceFunction() {
    totalPrice = 0;
    customizeBase();
    checkBoxCheck();
    priceDisplay();
    //  console.log(totalPrice);
}

pancakeBase.addEventListener('change', priceFunction);

for (let index = 0; index < checkbox.length; index++) {
    const element = checkbox[index];

    element.addEventListener('change', priceFunction);
}

const text = document.getElementById('content');

function textUpdate() {
    text.textContent = 'Hello ' + document.querySelector('#name').value;

}
// you can use the attribute selector also after the brackets: const pancakeBase = document.querySelector('#type').value;   CRAZY! :)

const orderName = document.getElementById('orderName');
const orderBase = document.getElementById('orderBase');
const orderTopp = document.getElementById('orderTopp');
const orderExtra = document.getElementById('orderExtra');
const orderDelivery = document.getElementById('orderDelivery');
const orderPrice = document.getElementById('orderPrice');

function displayOrder() {
    orderName.textContent = 'Your Name: ' + document.querySelector('#name').value;
    orderBase.textContent = 'Pancake type: ' + pancakeBase.options[pancakeBase.selectedIndex].text.split(' ')[0];
    let toppings = 'Selected Toppings: ';
    for (let index = 0; index < 3; index++) { // achtung bei Änderungen (oder neuen Event listener für die radio buttons machen)
        const element = checkbox[index];

        if (element.checked === true) {
            toppings += element.name + ', '; // eigentlich text benutzen der auf dem Screen ist
        }
    }
    let extras = 'Selected Extras: ';
    for (let index = 3; index < 5; index++) { // achtung bei Änderungen (oder neuen Event listener für die radio buttons machen)
        const element = checkbox[index];

        if (element.checked === true) {
            extras += element.name + ', '; // eigentlich text benutzen der auf dem Screen ist
        }
    }
    let delivery = 'Selected delivery method: ';
    for (let index = 6; index < 9; index++) {
        const element = checkbox[index];

        if (element.checked === true) {
            if (element.id == "eatin") {
                delivery += "Eat in";
            }
            if (element.id == "pickup") {
                delivery += "Pickup";
            }
            if (element.id == "delivery") {
                delivery += "Delivery";
            }
        }
    }
    orderTopp.textContent = toppings.slice(0, -2);
    orderExtra.textContent = extras.slice(0, -2);
    orderDelivery.textContent = delivery;
    orderPrice.textContent = `Total Price: $${totalPrice}`;
}
