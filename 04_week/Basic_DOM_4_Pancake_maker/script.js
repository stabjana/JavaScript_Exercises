// 1 Dropdown Menü auf auswahl if auswahl 1, 2, 3 (den inneren Text extahieren)
// 2 Toppings switch case 1 2 3 - auf true false
// 3 extras switch case 1 2 - auf true false
// function calculate price - show in page h3 total price span tag & oben im price banner (class)
// function is triggered by every step

const pancakeBase = document.querySelector('#type'); // später variable überschreiben je nach auswahl // option is attribute of type.
const checkbox = document.querySelectorAll('input');
const output = document.querySelectorAll('#totalPrice');
// console.log(checkbox);
let totalPrice; // wird das jedesmal mit 0 überschrieben?

priceFunction(); // i put that because it should invoke automatically by not changing the input field, so that it takes the 5€ by defalut to the total price.

function customizeBase() {

    totalPrice += parseInt(pancakeBase.value);// convert string to a number
    // console.log(totalPrice);
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
}

function priceFunction() {
    totalPrice = 0;
    customizeBase();
    checkBoxCheck();
    priceDisplay();
    console.log(totalPrice);
}

pancakeBase.addEventListener('change', priceFunction);

for (let index = 0; index < checkbox.length; index++) {
    const element = checkbox[index];

    element.addEventListener('change', priceFunction);
}


