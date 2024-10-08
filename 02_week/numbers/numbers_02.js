// Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is rounded to one decimal place for precision.

function fahrenheitToCelsius(f) {
    return ((f - 32) * 5 / 9).toFixed(1) // toFixed is a prototype, is part of the Number object .toFixed(1) rundet das ergebnis auf () Dezimalstellen
}

// Sample usage - do not modify
console.log(fahrenheitToCelsius(21)); // "-6,1"