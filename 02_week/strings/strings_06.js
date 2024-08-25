/**
Refine the skipFirstCharacter function to return a string containing all characters from the text parameter, excluding the first character.

 */
function skipFirstCharacter(aString) {
    return aString.substring(1); // using the substring method for any part inside of the string. Using 2 numbers would give only the characters in between those index values: return aString.substring(1, 5);
} // substring statt slice ist gut weil man nicht weiß wie lang der eingegebene String ist und bei slice muss man ein ende angeben, welches dann nicht angezeigt wird und das wäre in dem Fall der letzte char im string, der aber angezeigt werden soll.

// Sample usage - do not modify
console.log(skipFirstCharacter('Xcode')); // "code"
console.log(skipFirstCharacter('Hello')); // "ello"

/*
return text.substring(1);

*/