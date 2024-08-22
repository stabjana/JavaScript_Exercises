/**
Refine the getFirstCharacter function to return the first character of the name parameter provided to it.
 */

function getFirstCharacter(name) {
    return name[0]; //IndexNumber 1
    //  return name.charAt(1)
    //  return name.slice(0, 1)

}

// Sample usage - do not modify
console.log(getFirstCharacter('Amsterdam')); // "A"
console.log(getFirstCharacter('Japan')); // "J"