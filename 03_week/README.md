function oddNumber() {

    for (let count = 1; count < 100; count += 2) {
        console.log(count);
    }

}
oddNumber();

For running prompt in vs code/ terminal

run: npm install prompt-sync

then use this line in the beginning of the code:
const prompt = require('prompt-sync')();
