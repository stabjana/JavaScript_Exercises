// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

function averageSpeed() {
    let distance = 1;
    let time;
    while (distance != 0) {
        distance = +prompt('Enter distance in Km');

        if (distance == 0) {
            alert('0 is not enough');
            break;
        }
        time = +prompt('Enter time in hours');
        alert(distance / time);
    }
}
averageSpeed();

/*
function averageSpeed() {
    let km, hour;
    while (km != 0) {           // at first the distance is undefined, then it will go to line 7   undefined is not 0!
        km = +prompt('Enter distance in km - use numbers');

        if (km == 0) {
            console.log('km 0 -- no no worki');
            break;
        }

        hour = +prompt('enter time in hours - use numbers');

        let average = km / hour;        //(parseInt) or put a plus in front of the prompt: +prompt short operator to change into an int
        alert('average is ' + average);
        // console.log('data: ', distance, time, average); // plus in console log would turn it into a string
    }
}
averageSpeed();
*/

// prompt(‘ask what?’) -> you always get a string -> transform it to a number
// v = s / t Geschwindigkeit = strecke / zeit