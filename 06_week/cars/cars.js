class car {
    constructor(licencePlate, maker, model, currentOwner, price, color) {
        this.licencePlate = licencePlate;
        this.maker = maker;
        this.model = model;
        this.currentOwner = currentOwner;
        this.price = price;
        this.color = color;
    }
}

let allCars = [];
let car1 = 0;


function getInput(event) {
    /*  event.preventDefault(); */

    let carInput = new car(document.querySelector('#licensePl').value,
        document.querySelector('#maker').value,
        document.querySelector('#model').value,
        document.querySelector('#currOwner').value,
        document.querySelector('#price').value,
        document.querySelector('#color').value
    );

    allCars.push(carInput);

}
console.log(car1);
console.log(allCars);

function displayCars() {
    let table = document.querySelector('table');
    console.log(table);
    /* add a row to the table and display the content in the correct cells */
    let row = table.insertRow();
    let cell1 = row.insertCell();
    cell1.textContent = document.querySelector('#licensePl').value;
    console.log(cell1);
}

function resetForm() {
    document.querySelector('#licensePl').value = '';
    document.querySelector('#maker').value = '';
    document.querySelector('#model').value = '';
    document.querySelector('#currOwner').value = '';
    document.querySelector('#price').value = '';
    document.querySelector('#color').value = '';
}

function main() {
    getInput();
    displayCars();
}
/* 
LOOP und dann mit .name zuweisen für jede Cell

function call per on click funtioniert nur einer; function call muss anders erfolgen. vielleicht main schreiben. 
Dann muss der query selector ohne .value auskommen, der wird nicht erkannt. */


