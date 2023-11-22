// 3. (3p) Skriv en funktion, capitalizeWords, som tar en array av
// strängar som input och returnerar en ny array där varje
// ord börjar med en stor bokstav.

const firstLowerCase = ["hej", "på", "dig"];

function capitalizeWords(arr) {
    const firstUpperCase = [];

    for (let i = 0; i < arr.length; i++) {
        firstUpperCase.push(arr[i][0].toUpperCase() + arr[i].substr(1));
    }

    return firstUpperCase;
}

console.log(capitalizeWords(firstLowerCase));
console.log(capitalizeWords(["jag", "heter", "frej"]));