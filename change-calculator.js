let calculateChange = function(total, cash) {
  // Your code here
  var changeAmount = cash - total;
  var changeObject = {};

  while (changeAmount > 0) {
    if (changeAmount / 2000 >= 1) {
      changeObject["twentyDollar"] = Math.floor(changeAmount / 2000);
      changeAmount = changeAmount % 2000;
    } else if (changeAmount / 1000 >= 1) {
      changeObject["tenDollar"] = Math.floor(changeAmount / 1000);
      changeAmount = changeAmount % 1000;
    } else if (changeAmount / 500 >= 1) {
      changeObject["fiveDollar"] = Math.floor(changeAmount / 500);
      changeAmount = changeAmount % 5000;
    } else if (changeAmount / 200 >= 1) {
      changeObject["twoDollar"] = Math.floor(changeAmount / 200);
      changeAmount = changeAmount % 200;
    } else if (changeAmount / 100 >= 1) {
      changeObject["oneDollar"] = Math.floor(changeAmount / 100);
      changeAmount = changeAmount % 100;
    } else if (changeAmount / 25 >= 1) {
      changeObject["quarter"] = Math.floor(changeAmount / 25);
      changeAmount = changeAmount % 25;
    } else if (changeAmount / 10 >= 1) {
      changeObject["dime"] = Math.floor(changeAmount / 10);
      changeAmount = changeAmount % 10;
    } else if (changeAmount / 5 >= 1) {
      changeObject["nickel"] = Math.floor(changeAmount / 5);
      changeAmount = changeAmount % 5;
    } else {
      changeObject["penny"] = changeAmount / 1;
      changeAmount = changeAmount % 1;
    }
  }

  return changeObject;
};

// Tests

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));