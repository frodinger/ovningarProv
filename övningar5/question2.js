// 2. (3p) Skapa en funktion, removeDuplicates, som tar en array
// med element och returnerar en ny array där alla duplicerade
// element har tagits bort och endast unika element finns kvar.

const chars = [1, 1, 2, 3, 3, 6, 6, 8, 5, 2, 1, 7, 8, 6, 4]; // ska bli [1, 2, 3, 6, 8, 5, 7, 4]

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates(chars));
