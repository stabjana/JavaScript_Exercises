// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.


const answer = ["Make it so.", "You're in love with a computer subroutine.", " The only thing to do with good advice is to pass it on. It is never of any use to oneself.", "TA good scare is worth more to a man than good advice.", "When you encounter seemingly good advice that contradicts other seemingly good advice, ignore them both.", "The Golden Rule will always be good advice!"]
// array with possible answers

function createMessage() {
    return answer[Math.floor(Math.random() * 4)];
}
// Funktion gibt die random Antwort aus

function answer(answer) {
    alert(answer);
}

document.querySelector(`#submit_button`).onclick = function () {
    window.antwort.text = 'hallo';
}
/* ERROR: 8ball.js:13 Uncaught TypeError: Cannot set properties of null (setting 'onclick')
at 8ball.js:13:49 */

// Funktion für den klick des buttons



// Funktion für display der Antwort

/* console.log In das Antwort-Feld rein 
und das Eingabefeld muss die Frage aufnemhen 

  <button class="submit_answer_button" id="submit_button" style="display:none;">Eingabe</button>



*/

