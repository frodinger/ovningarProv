// 3. (3p) Skriv en funktion, capitalizeWords, som tar en array av
// strängar som input och returnerar en ny array där varje
// ord börjar med en stor bokstav.

/*

function capitalizeWords(arr) {
    const capitalize = [];

    for (let i = 0; i < arr.length; i++) {
        capitalize.push(arr[i][0].toUpperCase() + arr[i].substr(1));
    }

    return capitalize;
}

console.log(capitalizeWords(["hej", "på", "dig"]));
*/

// Davids kod

function capitalizeWords(arr) {
    
    /*
    const capitalizeArr = arr.map ( word => {
        const firstLetter = word.substring(0, 1);
        const theRest = word.substring(1);
        
        return firstLetter.toUpperCase() + theRest;
    });
    
    return capitalizeArr;
    */
    
    // alternativt använd return direkt istället för att spara ned det i en variabel
    
    return arr.map ( word => {
        const firstLetter = word.substring(0, 1);
        const theRest = word.substring(1);
        
        return firstLetter.toUpperCase() + theRest.toLowerCase();
    });
}

console.log(capitalizeWords(["jag", "heter", "frej"]));