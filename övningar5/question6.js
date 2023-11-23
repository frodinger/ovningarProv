// Skriv en funktion, generateRandomNumbers, som tar
// två parametrar: min och max. Funktionen ska generera
// och returnera en array med 10 slumpmässiga heltal mellan min och max.
// tips Math.random() ger en slumpad siffra mellan 0 och 1

function generateRandomNumbers(min, max) {
    const randomArr = [];

    for ( let i = 0; i < 10; i++) {
        randomArr.push(Math.floor(Math.random() * (max-min + 1)) + min);
    }

    return randomArr;
}

console.log(generateRandomNumbers(5, 10));