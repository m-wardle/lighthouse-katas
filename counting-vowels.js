let numberOfVowels = function(data) {
  // Put your solution here

  var vowels = ["a", "e", "i", "o", "u"];
  var vowelCount = 0;

  // Use nested for loop to compare each letter to each vowel, and count matching results.

  for (x = 0; x < data.length; x++) {
    for (y = 0; y < vowels.length; y++) {
      if (data[x] === vowels[y]) {
        vowelCount++;
        break; // This is probably not entirely necessary, but no need to run through the other vowels once one is matched.
      }
    }
  }

  return vowelCount;

};

// Tests

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));