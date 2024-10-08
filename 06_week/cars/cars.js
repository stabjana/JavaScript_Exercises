const addCarForm = document.querySelector('#inputForm');
const searchCarForm = document.querySelector('#search'); // for reset the form

let allCars = [];

class Car {
    constructor(licencePlate, maker, model, currentOwner, price, discountedPrice, color, year) {
        this.licencePlate = licencePlate;
        this.maker = maker;
        this.model = model;
        this.currentOwner = currentOwner;
        this.price = price;
        this.discountedPrice = discountedPrice;
        this.color = color;
        this.year = year;
    }
}

function getInput(event) {
    /* event.preventDefault(); */
    let discountedPrice = 'No discount';

    let carInput = new Car(document.querySelector('#licensePl').value,
        document.querySelector('#maker').value,
        document.querySelector('#model').value,
        document.querySelector('#currOwner').value,
        document.querySelector('#price').value,
        discountedPrice,
        document.querySelector('#color').value,
        document.querySelector('#year').value
    );
    console.log(carInput);

    if (carInput.year <= 2014) {
        carInput.discountedPrice = Math.round(carInput.price * 0.85 * 100) / 100; // it is older and gets discount 
        // erst wird 100 multipliziert, dann passiert round (auf ganze Zahl) dann /100 macht wieder kommastellen
    }

    try { // doesn't get new Input values and just adds the first sotred variables inside the array and table

        console.log(carInput.price);

        if (carInput.price < 0 || isNaN(carInput.price)) {

            console.log(carInput.price);

            throw new Error('Please enter the correct price'); // hat es immer eingetragen, auch wenn nummer negativ war. Weil die main function beide funktionen durchlaufen lässt und nicht den Eintrag in die Tabelle stoppt - fixed mit if in main function und retunr different values
        }
        if (carInput.year < 1886 || carInput.year > 2024 || isNaN(carInput.year)) {
            throw new Error('Please use a year between 1886 and 2024');
        }

        if (carInput.licencePlate == '') {
            throw new Error('Please enter License Plate');
        }
        for (let i = 0; i < carInput.licencePlate.length; i++) { // iterates through li Pl and defines only num and letters are allowed
            if (!((carInput.licencePlate[i] >= 'a' && carInput.licencePlate[i] <= 'z') || (carInput.licencePlate[i] >= 'A' && carInput.licencePlate[i] <= 'Z') || (carInput.licencePlate[i] >= '0' && carInput.licencePlate[i] <= '9'))) {
                throw new Error('Please enter only numbers and letters');
            }
        }
        if (carInput.maker == '') {
            throw new Error('Please enter the Maker');
        }
        if (carInput.model == '') {
            throw new Error('Please enter the Model');
        }
        if (carInput.owner == '') {
            throw new Error('Please enter the current owner');
        }
        if (carInput.color == '') {
            throw new Error('Please enter the color'); // wie error constructor, der dann fehler weiter schmeißt
        }

    }
    catch (error) { // fängt den error und hat dann den mit allen attributen
        displayMessage(error.message, 'error');
        return 0;
    }

    allCars.push(carInput);
    localStorage.setItem('allCars', JSON.stringify(allCars)); // only strings allowed in local storage -> JSON.stringify - setItem saves it into storage
    displayMessage('Car added successfully', 'success');
    return 1;
}

const loadCarsFromLocalStorage = () => {
    const storedCars = localStorage.getItem('allCars'); // restore items from the local storage
    if (storedCars) {
        const parsedCars = JSON.parse(storedCars); // to turn it into an object again
        parsedCars.forEach(carData => {
            allCars.push(new Car(carData.licencePlate, carData.maker, carData.model, carData.currentOwner, carData.price, carData.discountedPrice, carData.color, carData.year)); /* JSON.parse(storedCars): Wandelt den JSON-String in ein Array von Objekten um. Diese Objekte sind aber keine Car-Objekte, sondern nur normale, einfache JavaScript-Objekte mit Eigenschaften wie license, maker, model usw.
            Du brauchst aber Instanzen der Car-Klasse, um auf Methoden und Eigenschaften der Klasse Car zugreifen zu können. */
        });
        displayCars();
    }
};

function displayCars() {
    let table = document.querySelector('#carsTable');
    /* add a row to the table and display the content in the correct cells */

    let row = table.insertRow();
    let cell1 = row.insertCell();
    cell1.textContent = allCars[allCars.length - 1].licencePlate;

    let cell2 = row.insertCell();
    cell2.textContent = allCars[allCars.length - 1].maker;

    let cell3 = row.insertCell();
    cell3.textContent = allCars[allCars.length - 1].model;

    let cell4 = row.insertCell();
    cell4.textContent = allCars[allCars.length - 1].currentOwner;

    let cell5 = row.insertCell();
    cell5.textContent = allCars[allCars.length - 1].price;

    let cell6 = row.insertCell();
    cell6.textContent = allCars[allCars.length - 1].discountedPrice;

    let cell7 = row.insertCell();
    cell7.textContent = allCars[allCars.length - 1].color;

    let cell8 = row.insertCell();
    cell8.textContent = allCars[allCars.length - 1].year;

    let cell9 = row.insertCell(); // hängt einen button an die Zeile an
    let button = document.createElement("BUTTON");
    let t = document.createTextNode("Delete"); //Creates a new Text node. This method can be used to escape (erlaubt auch Sonderzeichen, die nicht HTML interpretiert werden) HTML characters. 
    button.setAttribute("class", "deleteBtn")
    button.appendChild(t); // fügt den Textknoten (Text: "Delete") zum Button-Element dazu
    cell9.appendChild(button);

    let index = table.rows.length;
    button.addEventListener("click", () => deleteCar(index)); //triggert delete car funktion
}

function deleteCar(index) { // index = table.rows.length
    let table = document.querySelector('#carsTable');
    table.deleteRow(index - 1); // löscht das Auto aus der Tabelle

    allCars.splice(index - 1, 1); // löscht das auto aus dem Cars array

    localStorage.setItem('allCars', JSON.stringify(allCars));

    displayMessage('Car deleted successfully', 'success');
}

function resetForm() {
    document.querySelector('#licensePl').value = '';
    document.querySelector('#maker').value = '';
    document.querySelector('#model').value = '';
    document.querySelector('#currOwner').value = '';
    document.querySelector('#price').value = '';
    document.querySelector('#color').value = '';
    document.querySelector('#year').value = '';
}

function main() {
    if (getInput()) { // if get input ist 0 = ist nicht da, wenn 1 = ist da
        displayCars();
    }
}
/* 
LOOP und dann mit .name zuweisen für jede Cell

function call per on click funtioniert nur einer; function call muss anders erfolgen. vielleicht main schreiben. 
Dann muss der query selector ohne .value auskommen, der wird nicht erkannt. */


function getInputPlate() {
    /*   e.preventDefault(); */
    let searchPlate = document.querySelector('#searchLicense').value;

    try {
        if (searchPlate == '') {
            throw new Error('Please enter a License Plate');
        }
        for (let i = 0; i < searchPlate.length; i++) { // iterates through li Pl and defines only num and letters are allowed
            if (!((searchPlate[i] >= 'a' && searchPlate[i] <= 'z') || (searchPlate[i] >= 'A' && searchPlate[i] <= 'Z') || (searchPlate[i] >= '0' && searchPlate[i] <= '9'))) {
                throw new Error('Please enter only numbers and letters');
            }
        }
    } catch (error) {
        displayMessage(error.message, 'error');
        return 0;
    }
    const filtered = allCars.filter((car) => car.licencePlate == searchPlate);

    console.log(filtered); // leer type is object.

    document.querySelector('#searchLicense').value = '';
    /* searchCarForm.reset(); */

    if (filtered.length == 1) { // wenn er eins gefunden hat(kann ja auch 0 sein)
        if (filtered[0].year <= 2014) {
            document.querySelector('#showSearch').textContent = `Maker: ${filtered[0].maker}, Model: ${filtered[0].model}, Owner: ${filtered[0].currentOwner}, Price: ${filtered[0].price}, Discounted Price: ${filtered[0].discountedPrice}`;
        }
        else {
            document.querySelector('#showSearch').textContent = `Maker: ${filtered[0].maker}, Model: ${filtered[0].model}, Owner: ${filtered[0].currentOwner}, Price: ${filtered[0].price}, No Discount`;
        }
    }
    else {
        document.querySelector('#showSearch').textContent = 'No matching car found.';
    }
}

function displayMessage(message, type = "success") { // looked from Margits code
    // shows message when called (message = declared as argument of function; type = optional argument with a default value "sucess" for CSS auswahl)
    const messageElement = document.querySelector("#message"); // shows in html document
    messageElement.textContent = message; // takes the value of current message
    messageElement.className = type; // for CSS: type wird definiert
    setTimeout(() => {
        messageElement.textContent = ""; // after 3sec messageEl takes Value empty String and empty class and turns on the default CSS value "hidden" 
        messageElement.className = "";
    }, 3000);
}; // put it in every message to call that displayMessage function - to show the message on screen

// displayMessage('Car added successfully', 'success');
// displayMessage(error.message, 'error');

window.addEventListener('load', loadCarsFromLocalStorage); // why not only just call the function?

let input = document.getElementById('#submitInfo');

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});