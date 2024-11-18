let number = Math.round(Math.random() * 100);
console.log(Math.round(number))

function guess() {
    const value = document.getElementById("a").value;
    const resultElement = document.getElementById('result');

    if (value == number) {
        resultElement.innerText = 'Exactly! You guessed the number!';

        // Генеруємо нове число через 4 секунди після вгадування
        setTimeout(() => {
            number = Math.round(Math.random() * 100);
            console.log('New generated number:', number);
            resultElement.innerText = 'Try guessing the new number!';
        }, 4000);
    } else if (value > number) {
        resultElement.innerText = 'Try a smaller number';
    } else if (value < number) {
        resultElement.innerText = 'Try a larger number';
    }
}


