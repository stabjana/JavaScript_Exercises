/*
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((json) => {
        json.forEach((aName) => console.log(aName.name));
    });


or getting other values from the array and the objects inside

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((json) => {
        json.forEach((aName) => console.log(aName.name.city));
    }); */


catFrame = document.querySelector('#catFrame')

async function fetchCats() {
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search`)
        const data = await response.json()
        console.log(data)

        catFrame.style.width = `${data[0].width}px`;
        catFrame.style.height = `${data[0].height}px`;
        catFrame.src = `${data[0].url}`;

    } catch (error) {
        console.error('Error', error);
    }
}
fetchCats();
