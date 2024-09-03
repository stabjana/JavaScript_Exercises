// Make a programm which will take in a string as an argument and will reverse it.

function reverseString(oldString) {
    newString = '';
    for (let index = oldString.length - 1; index >= 0; index--) { //neue Variable index. hier wird der Wert, den .length ermittelt, drauf geschrieben. -1, um mit dem letzten character anzufangen. dann decremente ich im index immer eins runter, bis wir bei 0 angekommen sind... 
        newString += oldString[index];      // ... und schreiben den Wert auf den neuen String, der oben deklariert wurde. (Concatenate)
    }
    console.log(newString);
}
reverseString('Lollipop Lollipop oh lolli lolli lolli Lollipop');

/* 
make it a page: application to reverse the given string */