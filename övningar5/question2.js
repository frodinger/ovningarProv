// 2. (3p) Skapa en funktion, removeDuplicates, som tar en array
// med element och returnerar en ny array där alla duplicerade
// element har tagits bort och endast unika element finns kvar.

const chars = [1, 1, 2, 3, 3, 6, 6, 8, 5, 2, 1, 7, 8, 6, 4]; // ska bli [1, 2, 3, 6, 8, 5, 7, 4]
const ch = ["hej", "hej", "HEJ", "hejsan"];

/*
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
A Set can hold any value of any data type.
*/

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates(chars));
console.log(removeDuplicates(ch));

// Davids kod

/*
function removeDuplicates(arr) {

    const unique = [];

    // includes - kollar om ett element finn i en array
    // indexOf - kollar vilket index ett element har. Ger -1 om den inte finns

    arr.forEach((item) => {
        
        if(!unique.includes(item)) {
            unique.push(item);
        }
    });

    return unique;

}
*/
