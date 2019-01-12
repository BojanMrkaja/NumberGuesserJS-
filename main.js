//Game value

let min = 1,
    max = 10,
    winningnum = gerWinningNum(min, max),
    guessesLeft = 3;

// UI Elements

    const game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

//Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

//Play Again eventListiner
game.addEventListener('mousedown', function(e){
   if(e.target.className === 'play-again'){
       window.location.reload();
   }
});

// Listen for guess

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    // Validate input
    if (isNaN(guess) || guess < min || guess > max || guess.length === 0) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    if (guess === winningnum) {
        //Disable input
        guessInput.disabled = true;
        //Change border color
        guessInput.style.borderColor = 'green';
        setMessage(`${winningnum} is correct, YOU WIN!!!`, 'green');
        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again';
    } else {
        // wRONG NUMBER
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            //Game over - lost
            //Disable input
            guessInput.disabled = true;
            //Change border color
            guessInput.style.borderColor = 'red';
            setMessage(`Game Over, you lost. The correct number was ${winningnum}`, 'red');
            guessBtn.value = 'Play Again';
            guessBtn.className += 'play-again';
        } else {
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
            guessInput.style.borderColor = 'red';
        }
    }

});

function gerWinningNum(min , max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}