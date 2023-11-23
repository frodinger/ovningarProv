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

// Davids kod

function findLongestWordInSentence(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  words.forEach((word) => {

    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

console.log(findLongestWordInSentence("jag gillar att ta sovmorgon"));