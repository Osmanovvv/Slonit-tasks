function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess(guess) {
    if (guess > secretNumber) {
        return 'Меньше';
    } else if (guess < secretNumber) {
        return 'Больше';
    } else {
        return 'Правильно!';
    }
}

function binarySearch(min, max) {
    let resultGuess = '';
    let guess;

    while (resultGuess !== 'Правильно!') {
        guess = Math.floor((min + max) / 2);
        console.log(`Компьютер 2: Пробую число ${guess}`);

        resultGuess = checkGuess(guess);
        console.log(`Компьютер 1: ${resultGuess}`);

        console.log('');
        
        if (resultGuess === 'Меньше') {
            max = guess - 1;
        } else if (resultGuess === 'Больше') {
            min = guess + 1;
        }
    }

    return guess;
}

const secretNumber = getRandomNumber(1, 100);
console.log(`Компьютер 1 загадал число: ${secretNumber}`);
console.log('');

let guess = binarySearch(1, 100);
console.log(`Компьютер 2: Угадал число ${guess}!`);

