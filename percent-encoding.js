const urlEncode = function(text) {
  // Put your solution here

  var textArray = text.split("");

  // This while loop seems overblown, but I thought I should account for strings beginning or ending with multiple spaces.
  // I also realized I could have used .trim() instead, but in the spirit of practice I thought I should leave my improvised solution.

  while (textArray[0] === " " || textArray[textArray.length - 1] === " ") {
    if (textArray[0] === " ") {
      textArray.shift()
    } else if (textArray[textArray.length - 1] === " ") {
      textArray.pop()
    }
  }

  for (i = 0; i < textArray.length; i++) {
    if (textArray[i] === " ") {
      textArray.splice(i, 1, "%20")
    }
  }

  return textArray.join("")
};

// Tests

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
console.log(urlEncode("      Lighthouse Labs   "));