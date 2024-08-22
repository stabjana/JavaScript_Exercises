/**
Refine the shoutMyName function to return the name parameter it receives, converted entirely to uppercase.
 */

function shoutMyName(name) {  //return changed values of the attribute ---- functon declaration
    name = name.toUpperCase(); // Syntax is: let shout = 'quiet'.toUpperCase(); // "QUIET"  BUT how to get it as variable and not with the fix values? Just use the variable name.
    return name;
}

// Sample usage - do not modify
console.log(shoutMyName('Sam')); // "SAM"
console.log(shoutMyName('Charley')); // "CHARLEY"
console.log(shoutMyName('alex')); // "ALEX"