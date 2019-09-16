const makeCase = function(input, test) {    // VSCode threw an "Expression expected" error when the second argument was "case", so I changed it.
  // Put your solution here

  var textArray = input.split("");
  var vowels = ["a", "e", "i", "o", "u"];

  // First precedence set

  for (var x = 0; x < test.length; x++) {
    if (test === "camel" || test[x] === "camel") {               // camelCase conversion
      for (var i = 0; i < textArray.length; i++) {
        if (textArray[i] === " ") {
          textArray.splice(i, 1,);
          textArray[i] = textArray[i].toUpperCase();
        } 
      }
    } else if (test === "pascal" || test[x] === "pascal") {       // PascalCase conversion
      textArray[0] = textArray[0].toUpperCase();
      for (i = 0; i < textArray.length; i++) {
        if (textArray[i] === " ") {
          textArray.splice(i, 1,);
          textArray[i] = textArray[i].toUpperCase();
        } 
      }
    } else if (test === "snake" || test[x] === "snake") {        // snake-case conversion
      for (i = 0; i < textArray.length; i++) {
        if (textArray[i] === " ") {
          textArray.splice(i, 1, "_");
        } 
      }
    } else if (test === "kebab" || test[x] === "kebab") {        // kebab-case conversion
      for (i = 0; i < textArray.length; i++) {
        if (textArray[i] === " ") {
          textArray.splice(i, 1, "-");
        } 
      }
    } else if (test === "title" || test[x] === "title") {        // Title Case conversion
      textArray[0] = textArray[0].toUpperCase();
      for (i = 0; i < textArray.length; i++) {
        if (textArray[i] === " ") {
          textArray[i + 1] = textArray[i + 1].toUpperCase();
        } 
      }
    }
  }

  // Second precedence set

  for (x = 0; x < test.length; x++) {
    if (test === "vowel" || test[x] === "vowel") {                 // vOwEl cAsE conversion
      for (var y = 0; y < textArray.length; y++){
        for (var z = 0; z < vowels.length; z++) {
          if (textArray[y] === vowels[z]) {
            textArray[y] = textArray[y].toUpperCase();
            break;
          }
        }
      }
    } else if (test === "consonant" || test[x] === "consonant") {  // CoNSoNaNT CaSe conversion
      for (y = 0; y < textArray.length; y++) {
        textArray[y] = textArray[y].toUpperCase();
      };
      for (y = 0; y < textArray.length; y++){
        for (z = 0; z < vowels.length; z++) {
          if (textArray[y] === vowels[z].toUpperCase()) {
            textArray[y] = textArray[y].toLowerCase();
            break;
          }
        }
      }
    }
  }

  // Third precedence set

  for (x = 0; x < test.length; x++) {                               // UPPER CASE conversion
    if (test === "upper" || test[x] === "upper") {
      for (y = 0; y < textArray.length; y++) {
        textArray[y] = textArray[y].toUpperCase();
      };
    } else if (test === "lower" || test[x] === "lower") {           // lower case conversion
      for (y = 0; y < textArray.length; y++) {
        textArray[y] = textArray[y].toLowerCase();
      };
    }
  }
  return textArray.join("");
}

  // Tests
  
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));