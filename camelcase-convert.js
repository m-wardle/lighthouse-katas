let camelCase = function(input) {
  // Your code here

  input = input.trim(); // Unsure if this is necessary for this exercise, but thought I would add for situations with external spaces.

  var textArray = input.split("");

  for (i = 0; i < textArray.length; i++) {
    if (textArray[i] === " ") {
      textArray.splice(i, 1,);
      textArray[i] = textArray[i].toUpperCase();
    } 
  }

  return textArray.join("");
};

// Tests

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("    loopy lighthouse     "));