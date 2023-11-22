// 1. (3p) Använd forEach för att skapa en funktion, calculateAverage,
// som tar en array av tal som input och returnerar medelvärdet
// av dessa tal.
// tips: Googla hur man räknar ut medelvärdet av ett antal tal


function calculateAverage(arr) {
  // Din kod här
  let sum = 0;

  arr.forEach((num) => {
    sum += num;
  });

  return sum / arr.length;
}

console.log(calculateAverage([5, 5, 5]));
console.log(calculateAverage([1, 2, 3, 4, 5]));