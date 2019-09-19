const squareCode = function(message) {
  // Put your solution here

  const textArray = message.split("");
  const squareArray = [];

  for (x = 0; x < textArray.length;) {
    if (textArray[x] === " ") {
      textArray.splice(x, 1);
    } else {
      x++
    }
  }

  const columns = Math.ceil(Math.sqrt(textArray.length));

  for (var x = 0; x < columns; x++) {
    for (var y = x; y < textArray.length; y = y + columns) {
      squareArray.push(textArray[y]);
    };

    squareArray.push(" ");
  }

  return squareArray.join("");
};

// Tests

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));