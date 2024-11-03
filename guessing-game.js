function guessingGame() {
    let randomNumber = Math.floor(Math.random() * 100);
    let guesses = 0;
    let win = false;
    return function guess(num) {
        guesses++;

        if (win) {
            return "The game is over, you already won!"
        } else if (num < randomNumber) {
            return `${num} is too low!`;
        } else if (num > randomNumber) {
            return `${num} is too high!`;
        } else {
            win = true;
            return `You win! You found ${num} in ${guesses} guesses.`;
        }
    }
}

module.exports = { guessingGame };
