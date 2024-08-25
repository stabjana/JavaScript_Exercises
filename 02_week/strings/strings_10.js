/**
Refine the capitalize function to ensure it capitalizes the first letter of the name parameter provided to it.
 */

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1); //man returnt den ersten Buchstaben, der mit charAT (index) ausgewählt wird, .toUpperCase und addiert den restlichen string mit slice dazu (minus den ersten Character)
}

// Sample usage - do not modify
console.log(capitalize('sam')); // "Sam"
console.log(capitalize('ALEX')); // "Alex"
console.log(capitalize('chARLie')); // "Charlie"

/*
return word.charAt(0).toUpperCase () + word.slice(1);
*/