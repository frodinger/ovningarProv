// Skapa en funktion, findLongestWord, som tar en sträng som input
// och returnerar det längsta ordet i strängen.

function findLongestWord(str) {
    const arr = str.split(" ");
    let longestWord = "";
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestWord.length) {
        longestWord = arr[i];
      }
    }
    return longestWord;
}
  
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("jag gillar att ta sovmorgon"));