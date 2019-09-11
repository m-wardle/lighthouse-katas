const conditionalSum = function(values, condition) {
  // Your code here

  var evenSum = 0;
  var oddSum = 0;

  // For loop passes over a ternary operator where even numbers produce a boolean 'false' (0), and odd produces a boolean true.
  // Even numbers are added to the evenSum variable, and odd numbers are added to the oddSum variable.

  for (i = 0; i < values.length; i++) {
    (values[i] % 2 ? (oddSum += values[i]) : (evenSum += values[i]))
  }

  if (condition === "even") {
    return evenSum;
  } else if (condition === "odd") {
    return oddSum;
  } else {
    return "Expected a condition of either 'even' or 'odd'";
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));