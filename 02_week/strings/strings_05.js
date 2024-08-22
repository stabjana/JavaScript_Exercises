/**
Refine the getLastCharacter function so that it returns the last character from the name parameter it receives.
 */

function getLastCharacter(name) {
    return name.charAt(name.length - 1); // using the charAt method with the given parameters and "counting" the length and then using -1 to set the index position to the last character
}

// Sample usage - do not modify
console.log(getLastCharacter('Sam')); // "m"
console.log(getLastCharacter('Alex')); // "x"
console.log(getLastCharacter('Charley')); // "y"

/*
return name.at(-1)
return name[name.length -1] */