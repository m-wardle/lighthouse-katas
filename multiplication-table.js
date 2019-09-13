const multiplicationTable = function(maxValue) {
  // Your code here

  var tableString = "";

  for (y = 1; y <= maxValue; y++) {
    for (x = 1; x <= maxValue; x++) {
      tableString = tableString + (x * y) + " "
    }
    tableString += "\n"
  }

  return tableString;
};

// Tests

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));