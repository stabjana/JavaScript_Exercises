// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.
// one string with those numbers

function numberPattern() {
    let answer = '';

    for (let i = 2; i < 100; i += 2) {
        answer += `${i}, ${100 - i}, `
    }
    console.log(answer.slice(0, -2)); // endet mit Komma + leerzeichen und das macht das dann weg
}
numberPattern();

/*
function altNumbers() {

    let answer = '';
    let end = 98;
    for (let i = 2; i < 100; i += 2) {
        //template literal - no matter what the string is i add more things to it
        answer += `${i} ${end} `; //
        end -= 2;        // takes a way 2 steps
    }
    // for (let i = 2, let j = 100; i < 100, j > 0; i += 2, j -= 2) {
    // console.log(i = '', j = '');

    console.log(answer);
}
altNumbers();
*/