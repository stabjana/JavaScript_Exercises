// Make program which will use a while loop to calculate the sum of all numbers from 1 to 100.

function allNumbers() {
    let count = 1;
    let sum = 0;
    while (count <= 100) {
        sum += count;
        count++;
    }
    console.log(sum);
}
allNumbers();